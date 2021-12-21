import Product from '../models/ProductCart.js'

class userController {
    async check(req, res) {
        let products = await Product.find()

        res.send({products})
    }
}

export default new userController()
