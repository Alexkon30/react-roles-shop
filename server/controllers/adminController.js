

class adminController {
    check(req, res) {
        res.send({message: 'admin ok'})
    }
}

export default new adminController()
