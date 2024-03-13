import express from 'express'
const generelRouter = express.Router()
import handleGenerelBot from '../controllers/handleGenerelBot.js'

generelRouter.post('/',handleGenerelBot)

export default generelRouter
