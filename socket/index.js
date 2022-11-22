const express = require('express')
const app = express()
const http = require('http').Server(app)
const cors = require('cors')
const PORT = process.env.PORT || 5000
const socketIO = require('socket.io')(http, {
  cors: {
    origin: 'https://belink.netlify.app/',
  },
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({ origin: `https://belink.netlify.app` }))

socketIO.on('connection', (socket) => {
  console.log(` ${socket.id} user just connected!`)

  socket.on('join_room', (data) => {
    socket.join(data)
  })

  socket.on('send_message', (data) => {
    const { room_id, text, user, timestamp } = data
    console.log('data', data)
    const newMessage = {
      text,
      user,
      time: `${timestamp.hour}:${timestamp.mins}`,
    }
    console.log('New Message', newMessage)
    socket.to(room_id).emit('receive_message', newMessage)
  })
  socket.on('disconnect', () => {
    socket.disconnect()
    console.log('A user disconnected')
  })
})

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
