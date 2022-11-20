import express from 'express'
// import { handleSendMessage } from '../controllers/chatController.js'

const router = express.Router()

router.post(`/message/:roomid`, (req, res) => {
  // handleSendMessage(req, res)
})

export default router