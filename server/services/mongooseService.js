import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/travelsmartdb"

const connectToDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log('Connected to MongoDB successfully')
    } catch (err) {
        console.error('Error connecting to MongoDB: ', err.message)
        process.exit(1)
    }
}

export default connectToDB
