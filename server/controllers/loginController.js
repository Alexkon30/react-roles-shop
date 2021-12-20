import User from '../models/UserCart.js'

class loginController {
    checkAuth(req, res) {
        res.send({message: 'ok'})
    }
}

export default new loginController()
