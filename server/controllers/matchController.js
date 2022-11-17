import { v4 as uuidv4 } from 'uuid'
import User from '../models/user.js'

export const generateNewMatches = async (req, res) => {
  try {
    const userEmail = req.user
    const user = await User.findOne({ email: userEmail })

    const potentialUsers = await User.find({
      profession: user.profession,
      'company.isCompany': !user.company.isCompany,
      _id: { $nin: user.seenUsers },
    }).limit(200)
    const finalGrades = []
    for (const potentialUser of potentialUsers) {
      const grades = []
      for (const tech in potentialUser.tech) {
        if (user.tech[tech]) {
          const grade =
            (parseInt(user.tech[tech]) / parseInt(potentialUser.tech[tech])) * 100
          grades.push(Math.floor(grade > 100 ? 100 : grade))
        } else {
          if (potentialUser.company.isCompany) {
            grades.push(0)
          }
        }
      }
      if (grades.length === 0) grades.push(0)
      const gradesSum = grades.reduce((a, b) => a + b, 0)
      let finalGrade = gradesSum / grades.length
      if (user.company.isCompany) {
        if (user.company.lookingForDegree) {
          let potentialUserHaveDegree = false

          for (const education of potentialUser.education) {
            if (education.degree) {
              potentialUserHaveDegree = true
            }
          }
          if (!potentialUserHaveDegree) {
            finalGrade -= 20
          }
        }
      } else {
        if (potentialUser.company.lookingForDegree) {
          let userHaveDegree = false
          for (const education of user.education) {
            if (education.degree) {
              userHaveDegree = true
            }
          }
          if (!userHaveDegree) {
            finalGrade -= 20
          }
        }
      }
      if (finalGrade > 100) {
        finalGrade = 100
      }
      if (finalGrade < 0) {
        finalGrade = 0
      }
      finalGrades.push({
        user: {
          name: potentialUser.name,
          profession: potentialUser.profession,
          image: potentialUser.image,
          about: potentialUser.about,
          links: potentialUser.links,
          education: potentialUser.education,
          experience: potentialUser.experience,
          tech: potentialUser.tech,
          id: potentialUser._id,
        },
        grade: finalGrade,
      })
    }
    const values = finalGrades
      .map(({ grade }) => grade)
      .sort((a, b) => b - a)
      .slice(0, 10)
    const top10 = finalGrades.filter(({ grade }) => values.includes(grade))
    for (let i = 0; i < top10.length; i++) {
      user.seenUsers.push(top10[i].user.id)
    }
    await user.save()
    res.send(top10)
    // const top10Users = []
    // for (const user of top10) {
    //   const fullUser = await User.findById(user.userId)
    //   top10Users.push(fullUser)
    // }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const handleUserSwipedRight = async (req, res) => {
  try {
    const { matchId } = req.body

    let itsAMatch = false

    const userEmail = req.user
    const user = await User.findOne({ email: userEmail })
    const potentialMatch = await User.findOne({ _id: matchId })

    user.match.push(potentialMatch._id)
    await user.save()

    if (potentialMatch.match.includes(user._id)) {
      //ITS A MATCH!!
      itsAMatch = true
      const roomId = uuidv4()
      const newChat = {
        roomId: roomId, //user1 ID + user2 ID
        userName: potentialMatch.name,
        userImage: potentialMatch.image,
        messages: [],
      }
      user.chatList.push(newChat)
      await user.save()
    }
    res.send({ match: itsAMatch })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
