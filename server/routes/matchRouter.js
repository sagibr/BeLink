import express from 'express'
import {
  generateNewMatches,
  handleUserSwipedRight,
} from '../controllers/matchController.js'

const router = express.Router()

router.get(`/generate`, (req, res) => {
  generateNewMatches(req, res)
})

router.patch('/swipedRight', (req, res) => {
  handleUserSwipedRight(req, res)
})

export default router
