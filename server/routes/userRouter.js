import express from 'express'
import {
  handleLogin,
  handleLogout,
  handleRegister,
} from '../controllers/userController.js'

const router = express.Router()

router.post(`/login`, (req, res) => {
  handleLogin(req, res)
})
router.post(`/register`, (req, res) => {
  handleRegister(req, res)
})
router.get(`/logout`, (req, res) => {
  handleLogout(req, res)
})

export default router
