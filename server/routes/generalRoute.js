import express from 'express'
import handleGeneralBot from '../controllers/handleGeneralBot.js'

const generalRouter = express.Router()

generalRouter.post('/', handleGeneralBot)

export default generalRouter
