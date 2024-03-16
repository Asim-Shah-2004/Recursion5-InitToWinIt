import express from 'express'
import cors from 'cors'
import { corsOptions } from './config/index.js'
import { connectToDB } from './services/index.js'
import { loginRouter, registerRouter, generalRouter, uploadRouter, ttsRouter } from './routes/index.js'

const app = express()
const PORT = 3000

connectToDB()

app.use(express.json())
app.use(cors(corsOptions))

app.use('/register', registerRouter)
app.use('/login', loginRouter)
app.use('/upload', uploadRouter)
app.use('/general', generalRouter)
app.use('/textToSpeech', ttsRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
