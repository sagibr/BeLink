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
  } = req.body

  if (
    !email ||
    !password ||
    !name ||
    !profession ||
    !about ||
    !education ||
    !experience ||
    !tech
  ) {
    return res.status(400).json({ message: 'missing inputs' })
  }

  const duplicate = await User.findOne({ email: email }).exec()
  if (duplicate) return res.sendStatus(409)

  try {
    //encrypt the password
    const hashedPassword = await bcrypt.hash(password, parseInt(PasswordSalt))
    const result = await User.create({
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
    })
    res.status(201).json({ sucess: `New user ${email} created` })
  } catch (err) {
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
    const accessToken = jwt.sign({}, ACCESS_TOKEN_SECRET, {
      expiresIn: '15m',
    })
    const refreshToken = jwt.sign({}, REFRESH_TOKEN_SECRET, {
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
