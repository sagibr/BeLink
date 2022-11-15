import User from '../models/user.js'

export const handleDeleteUser = async (req, res) => {
  const userEmail = req.user
  try {
    await User.findOneAndDelete({ email: userEmail })
    res.status(204).json({ sucess: `user ${userEmail} deleted` })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const handleUpdateUser = async (req, res) => {
  const userEmail = req.user
  try {
    const foundUser = await User.findOneAndUpdate({ email: userEmail }, req.body, {
      new: true,
    })
    if (!foundUser) return res.sendStatus(401) //Unauthorized

    const user = {
      name: foundUser.name,
      email: foundUser.email,
      profession: foundUser.profession,
      image: foundUser.image,
      about: foundUser.about,
      links: foundUser.links,
      education: foundUser.education,
      experience: foundUser.experience,
      tech: foundUser.tech,
      company: foundUser.company,
      match: foundUser.match,
    }
    res.send(user)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
