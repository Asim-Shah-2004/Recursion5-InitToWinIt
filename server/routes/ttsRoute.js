import express from 'express'
const ttsRouter = express.Router()
import textToSpeech from '../controllers/handleTextToSpeech.js'

ttsRouter.post('/', textToSpeech)

export default ttsRouter
