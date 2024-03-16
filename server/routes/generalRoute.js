import express from 'express'
import { handleGeneralBot } from '../controllers/index.js'

const generalRouter = express.Router()

generalRouter.post('/', handleGeneralBot)

export default generalRouter
