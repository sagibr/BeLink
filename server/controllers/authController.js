import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'
import {
  ACCESS_TOKEN_SECRET,
  NODE_ENV,
  PasswordSalt,
  REFRESH_TOKEN_SECRET,
} from '../utils/config.js'

export const handleRegister = async (req, res) => {
  const {
    name,
    email,
    password,
    profession,
    image,
    about,
    links,
    education,
    experience,
    tech,
    company,
  } = req.body

  if (
    !email ||
    !password ||
    !name ||
    !profession ||
    !about ||
    !education ||
    !experience ||
    !tech ||
    !company
  ) {
    return res.status(400).json({ message: 'missing inputs' })
  }
  console.log(tech)
  const duplicate = await User.findOne({ email: email }).exec()
  if (duplicate) return res.sendStatus(409)

  try {
    //encrypt the password
    const hashedPassword = await bcrypt.hash(password, parseInt(PasswordSalt))
    console.log(tech)
    await User.create({
      name: name,
      email: email,
      password: hashedPassword,
      profession: profession,
      image: image,
      about: about,
      links: links,
      education: education,
      experience: experience,
      tech: tech,
      company: company,
      match: [],
      chatList: [],
    })
    res.status(201).json({ sucess: `New user ${email} created` })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message })
  }
}

export const handleLogin = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) return res.status(400).json({ message: 'missing inputs' })

  const foundUser = await User.findOne({ email: email }).exec()

  if (!foundUser) return res.sendStatus(401) //Unauthorized
  //evaluate password
  const match = await bcrypt.compare(password, foundUser.password)
  if (match) {
    const accessToken = jwt.sign({ userEmail: foundUser.email }, ACCESS_TOKEN_SECRET, {
      expiresIn: '15m',
    })
    const refreshToken = jwt.sign({ userEmail: foundUser.email }, REFRESH_TOKEN_SECRET, {
      expiresIn: '1d',
    })
    //saving refreshToken with current user
    foundUser.refreshToken = refreshToken
    await foundUser.save()

    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      sameSite: 'None',
      secure: NODE_ENV === 'prod' ? true : false,
      maxAge: 24 * 60 * 60 * 1000,
    })

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
      chatList: foundUser.chatList,
    }
    res.json({ user, accessToken })
  } else {
    res.sendStatus(401) //Unauthorized
  }
}

export const handleLogout = async (req, res) => {
  const cookies = req.cookies
  if (!cookies?.jwt) return res.sendStatus(204) //No content

  const refreshToken = cookies.jwt

  //Is refresh token in DB?
  const foundUser = await User.findOne({ refreshToken: refreshToken }).exec()
  if (!foundUser) {
    res.clearCookie('jwt', {
      httpOnly: true,
      sameSite: 'None',
      secure: NODE_ENV === 'prod' ? true : false,
    })
    return res.sendStatus(204)
  }

  //Delete refreshToken in db
  foundUser.refreshToken = ''
  await foundUser.save()

  res.clearCookie('jwt', {
    httpOnly: true,
    sameSite: 'None',
    secure: NODE_ENV === 'prod' ? true : false,
  })
  return res.sendStatus(204)
}

export const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies
  if (!cookies?.jwt) return res.sendStatus(401)

  const refreshToken = cookies.jwt
  const foundUser = await User.findOne({ refreshToken: refreshToken }).exec()
  if (!foundUser) return res.sendStatus(403) //Forbidden

  //evaluate jwt
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.email !== decoded.userEmail) return res.sendStatus(403) //Forbidden

    const accessToken = jwt.sign({ userEmail: decoded.userEmail }, ACCESS_TOKEN_SECRET, {
      expiresIn: '15m',
    })

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
      chatList: foundUser.chatList,
    }
    res.json({ user, accessToken })
  })
}
