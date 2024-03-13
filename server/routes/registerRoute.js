import express from 'express'
const RegisterRouter = express.Router()
import handleRegister from '../controllers/handleRegister.js'

RegisterRouter.post('/', handleRegister)

export default RegisterRouter
