import { allowedOrigins } from '../utils/config.js'

const credentials = (req, res, next) => {
  const origin = req.headers.origin
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Credentials', true)
    res.header('access-control-expose-headers', 'Set-Cookie')
  }
  next()
}

export default credentials
