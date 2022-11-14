import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import credentials from './middleware/credentials.js'
import verifyJWT from './middleware/verifyJWT.js'
import authRouter from './routes/authRouter.js'
import userRouter from './routes/userRouter.js'

const app = express()

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials)

// Cross Origin Resource Sharing
app.use(cors())

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }))

// built-in middleware for json
app.use(express.json())

//middleware for cookies
app.use(cookieParser())

app.use('/auth', authRouter)

app.use(verifyJWT)

app.use(`/user`, userRouter)

export default app
