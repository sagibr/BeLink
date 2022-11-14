import express from 'express'
import {
  handleLogin,
  handleLogout,
  handleRefreshToken,
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
router.get(`/refresh`, (req, res) => {
  handleRefreshToken(req, res)
})

export default router
