import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Please enter username'],
        },
        password: {
            type: String,
            required: [true, 'Please enter password'],
        },
    },
    { collection: 'user' }
)

const user = mongoose.model('user', userSchema)

export default user
