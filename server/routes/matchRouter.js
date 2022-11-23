import express from 'express'
import {
  generateNewMatches,
  handleUserSwipedLeft,
  handleUserSwipedRight,
} from '../controllers/matchController.js'

const router = express.Router()

router.get(`/generate`, (req, res) => {
  generateNewMatches(req, res)
})

router.patch('/swipedRight', (req, res) => {
  handleUserSwipedRight(req, res)
})
router.patch('/swipedLeft', (req, res) => {
  handleUserSwipedLeft(req, res)
})

export default router
