import User from '../models/user.js'
import bcrypt from 'bcrypt'

const handleRegister = async (req, res) => {
    const { username, password } = req.body

    try {
        if (!username || !password)
            return res.status(400).send({ message: 'Enter Username and Password!' })

        const existingUser = await User.findOne({ username })

        if (existingUser) return res.send({ message: 'User already exists' })

        const hashedPwd = await bcrypt.hash(password, 10)

        const newUser = new User({
            username: username,
            password: hashedPwd,
        })

        await newUser.save()

        res.send({
            message: 'User successfully registered',
            user: username,
            password: password,
        })
    } catch (err) {
        console.error('Error registering user:', err)
        res.status(500).send({ message: 'Invalid Password' })
    }
}

export default handleRegister
