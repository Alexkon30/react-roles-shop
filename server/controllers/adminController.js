import Order from '../models/OrderCard.js'

class adminController {
    async fetchAllOrders(_, res) {
        let orders = await Order.find()
        res.send({orders})
    }

    async changeOrderStatus(req, res) {
        console.log(req.body)
        let result  = await Order.findByIdAndUpdate(req.body.id, {isFinished: req.body.value}, {new: true})
        res.send({id: result.id})
    }
}

export default new adminController()
