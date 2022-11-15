import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import credentials from './middleware/credentials.js'
import userRouter from './routes/userRouter.js'

// passport
import session from'express-session'
import passport from "passport";
import authPassportRoute from './routes/authPassport.js'
import "./middleware/passport.js"

const app = express()

// passport
app.use(session({
    secret: 'somethingsecretgoeshere',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
 }));
app.use(passport.initialize())
app.use(passport.session())


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

app.use('/user', userRouter)

// login by pasport
app.use("/authPassport", authPassportRoute);


export default app
