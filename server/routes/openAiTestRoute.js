import express from 'express'
const openAiTestRoute = express.Router()
import openAiBot from '../services/openAiService.js'

openAiTestRoute.post('/',openAiBot)

export default openAiTestRoute
