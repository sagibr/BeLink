import mongoose from 'mongoose'

const UserSchema = mongoose.Schema([
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profession: [{ type: String, required: true }],
    image: { type: String },
    about: { type: String, required: true },
    links: [{ type: String }],
    education: [
      {
        location: { type: String, required: true },
        time: { type: Number, required: true },
        profession: { type: String, required: true },
      },
    ],
    experience: [
      {
        location: { type: String, required: true },
        time: { type: Number, required: true },
        role: { type: String, required: true },
      },
    ],
    tech: {},
    refreshToken: { type: String },
  },
])

const User = mongoose.model('user', UserSchema)

export default User
