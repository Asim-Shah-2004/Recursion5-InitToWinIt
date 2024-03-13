import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import connectToDatabase from './services/mongooseService.js'
import RegisterRouter from './routes/registerRoute.js'
import loginRouter from './routes/loginRoute.js'
import uploadRouter from './routes/uploadRoute.js'
import corsOptions from './config/corsOptions.js'
import generelRouter from './routes/generelRoute.js'
import ttsRouter from './routes/ttsRoute.js'

dotenv.config()

const app = express()
const PORT = 3000

connectToDatabase()

app.use(express.json())
app.use(cors(corsOptions))

app.use('/register', RegisterRouter)
app.use('/login', loginRouter)
app.use('/upload', uploadRouter)
app.use('/general', generelRouter)
app.use('/textToSpeech', ttsRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
