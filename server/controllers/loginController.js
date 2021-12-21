import User from '../models/UserCard.js'

class loginController {
    checkAuth(req, res) {
        res.send({message: 'ok'})
    }
}

export default new loginController()
