import Product from '../models/ProductCard.js'

class userController {
    async fetchAllGoods(req, res) {
        let products = await Product.find()

        res.send({products})
    }

    async newOrder(req, res) {
        console.log(req.body)

        res.send()
    }
}

export default new userController()
