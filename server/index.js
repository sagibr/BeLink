import mongoose from 'mongoose'
import app from './app.js'
import { connectDB } from './controllers/DBController.js'

const PORT = process.env.PORT || 4000

connectDB()

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
  app.listen(PORT, async () => {
    console.log(`server is up and running at localhost:${PORT}`)
  })
})
