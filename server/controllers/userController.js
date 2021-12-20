

class userController {
    check(req, res) {
        res.send({message: 'user ok'})
    }
}

export default new userController()
