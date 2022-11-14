import jwt from 'jsonwebtoken'
import { ACCESS_TOKEN_SECRET } from '../utils/config.js'

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization
  if (!authHeader?.startsWith('Bearer ')) {
    return res.sendStatus(401) //Unauthorized
  }

  const token = authHeader.split(' ')[1]

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.sendStatus(403) //invalid token
    }
    req.user = decoded.userEmail
    next()
  })
}

export default verifyJWT
