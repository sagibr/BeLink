import express from 'express'
import {
  handleLogin,
  handleLogout,
  handleRefreshToken,
  handleRegister,
} from '../controllers/authController.js'

const router = express.Router()

router.post(`/login`, (req, res) => {
  console.log('login start')
  handleLogin(req, res)
})
router.post(`/register`, (req, res) => {
  handleRegister(req, res)
})
router.get(`/logout`, (req, res) => {
  handleLogout(req, res)
})
router.get(`/refresh`, (req, res) => {
  console.log('====================================')
  console.log(req)
  console.log('====================================')
  handleRefreshToken(req, res)
})

export default router
