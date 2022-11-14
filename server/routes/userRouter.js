import express from 'express'
import { handleDeleteUser, handleUpdateUser } from '../controllers/userController.js'

const router = express.Router()

router.delete(`/delete`, (req, res) => {
  handleDeleteUser(req, res)
})

router.patch(`/update`, (req, res) => {
  handleUpdateUser(req, res)
})

export default router
