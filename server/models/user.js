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
        degree: { type: Boolean, required: true },
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
    company: {
      isCompany: { type: Boolean, required: true },
      lookingForDegree: { type: Boolean },
    },
    match: [{ type: String }],
    seenUsers: [{ type: String }],
    chatList: [
      {
        roomId: { type: String, required: true }, //user1 ID + user2 ID
        userName: { type: String, required: true },
        userImage: { type: String },
        messages: [
          {
            text: { type: String, required: true },
            user: { type: String, required: true },
            timestamp: { type: String, required: true },
          },
        ],
      },
    ],
  },
])

const User = mongoose.model('user', UserSchema)

export default User
