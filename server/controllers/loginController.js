import User from '../models/UserCard.js'

class loginController {
    async checkAuth(req, res) {
        try {
            let candidates = await User.find(req.body)

            if (candidates.length === 0) {
                res.send({ success: false, message: 'Wrong email or password' })
            } else if (candidates.length === 1) {
                res.send({ success: true, role: candidates[0].role })
            }
        } catch (e) {
            res.send({ success: false, message: 'Some problems on server' })
        }
    }

    async createNewUser(req, res) {
        const { username, email, password, confirmedPassword } = req.body

        if (password.length < 4) {
            res.send({ success: false, message: 'Password length must be above 3 symbols' })
            return
        } else if (password !== confirmedPassword) {
            res.send({ success: false, message: 'Passwords must be same' })
            return
        }

        try {
            let newUser = await User.create({ username, email, password })
            res.send({ success: true, role: newUser.role })
        } catch (e) {
            res.send({ success: false, message: 'User with the same email already exists' })
        }
    }
}

export default new loginController()
