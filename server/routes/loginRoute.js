import express from 'express'
import { handleLogin } from '../controllers/index.js'

const loginRouter = express.Router()

loginRouter.post('/', handleLogin)

export default loginRouter
