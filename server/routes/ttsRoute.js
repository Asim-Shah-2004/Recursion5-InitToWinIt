import express from 'express'
import { handleTextToSpeech } from '../controllers/index.js'

const ttsRouter = express.Router()

ttsRouter.post('/', handleTextToSpeech)

export default ttsRouter
