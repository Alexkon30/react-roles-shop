import Product from '../models/ProductCard.js'
import Order from '../models/OrderCard.js'

class userController {
    async fetchAllGoods(_, res) {
        try {
            let products = await Product.find()
            res.send({success: true, products})
        } catch(e) {
            res.send({success: false, message: 'Error with DB'})
        }
    }

    async newOrder(req, res) {
        try {
            await Order.create(req.body)
            res.send({success: true})
        } catch (e) {
            res.send({success: false, message: 'Error with DB'})
        }
    }
}

export default new userController()
