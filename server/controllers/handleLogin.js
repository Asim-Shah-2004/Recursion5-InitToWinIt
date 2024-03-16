import User from '../models/user.js'
import bcrypt from 'bcrypt'

const handleLogin = async (req, res) => {
    const { username, password } = req.body

    if (!username || !password)
        return res.status(400).send({ message: 'Enter Username and Password!' })

    try {
        const user = await User.findOne({ username })

        if (!user) return res.status(404).send({ message: 'User not found' })

        const result = await bcrypt.compare(password, user.password)

        if (!result)
            return res.status(401).send({ message: 'Incorrect password' })

        res.status(200).send({
            message: 'Login successful',
            user: username,
            password: password,
        })
    } catch (err) {
        console.error('Error during login:', err)
        return res.status(500).send({ message: 'Error during login' })
    }
}

export default handleLogin
