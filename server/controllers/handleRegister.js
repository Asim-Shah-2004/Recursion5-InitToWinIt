import User from '../models/user.js'
import bcrypt from 'bcrypt'

const handleRegister = async (req, res) => {
    const { username, password } = req.body

    try {
        const existingUser = await User.findOne({ username })
        console.log(existingUser)
        if (existingUser) return res.send({ message: 'User already exists' })

        const hashedPwd = await bcrypt.hash(password, 10)

        const newUser = new User({
            username: username,
            password: hashedPwd,
        })

        await newUser.save()

        console.log(newUser)

        res.send({ message: 'User successfully registered' })
    } catch (error) {
        console.error('Error registering user:', error)
        res.status(500).send({ message: 'Error registering user' })
    }
}

export default handleRegister
