import express from 'express'
import { handleSendMessage } from '../controllers/chatController'

const router = express.Router()

router.post(`/message/:roomid`, (req, res) => {
  handleSendMessage(req, res)
})
