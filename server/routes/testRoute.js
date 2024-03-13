import express from 'express'
const testRouter = express.Router()
import textToSpeech from '../services/textToSpeech.js'

testRouter.post('/', textToSpeech)

export default testRouter
