import User from '../models/user.js'

export const handleSendMessage = async (req, res) => {
  console.log("start chat");
  const userEmail = req.user
  const roomId = req.params.roomid
  const message = req.body
  const user = await User.findOne({ email: userEmail })

  for (const chat of user.chatList) {
    if (chat.roomId === roomId) {
      chat.messages.push(message)
      user.save()
      res.send(chat)
    }
  }
}
