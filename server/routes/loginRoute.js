import express from 'express'
const loginRouter = express.Router()
import LoginHandler from '../controllers/handleLogin.js'

loginRouter.post('/', LoginHandler)

export default loginRouter
