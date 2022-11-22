import dotenv from 'dotenv'
dotenv.config()

export const MONGODB_URI = process.env.MONGODB_URI
export const PasswordSalt = process.env.PasswordSalt
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET
export const NODE_ENV = process.env.NODE_ENV

export const allowedOrigins = [
  'http://localhost:3500',
  'http://localhost:3000',
  'exp://10.195.25.165:19000',
  'http://localhost:19006',
  'https://belink.netlify.app/'
]
