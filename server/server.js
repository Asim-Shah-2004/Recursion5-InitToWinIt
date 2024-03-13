import express from 'express'
const PORT = 3000
const app = express()
import RegisterRouter from './routes/registerRoute.js'
import loginRouter from './routes/loginRoute.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const CONNECTION_URL = `mongodb+srv://IPL_AUCTION_24:${process.env.PASSWORD}@cluster0.ilknu4v.mongodb.net/HACKATHON?retryWrites=true&w=majority`;

mongoose
    .connect(CONNECTION_URL)
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch((err) => console.log(`No connection to MongoDB\nError:\n${err}`))
app.use(express.json())
app.use('/register', RegisterRouter)
app.use('/login', loginRouter)

app.listen(PORT, () => {
    console.log(`server running on port ${3000}`)
})
