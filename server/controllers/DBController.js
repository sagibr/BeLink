import mongoose from 'mongoose'
import { MONGODB_URI } from '../utils/config.js'

export const connectDB = async () => {
  try {
    mongoose.connect(MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
  } catch (err) {
    console.error(err)
  }
}
