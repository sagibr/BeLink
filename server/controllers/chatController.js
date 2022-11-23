import User from '../models/user.js'

export const handleSendMessage = async (req, res) => {
  console.log('start chat')
  const userEmail = req.user
  const roomId = req.params.roomid
  const message = req.body
  message.timestamp = `${message.timestamp.hour}:${message.timestamp.mins}`
  const user = await User.findOne({ email: userEmail })
  const userTwo = await User.findOne({
    'chatList.roomId': roomId,
    email: { $nin: userEmail },
  })
  for (const chat of user.chatList) {
    if (chat.roomId === roomId) {
      chat.messages.push(message)
      res.send(chat)
    }
  }
  user.save()

  for (const chat of userTwo.chatList) {
    if (chat.roomId === roomId) {
      chat.messages.push(message)
    }
  }
  userTwo.save()
}
