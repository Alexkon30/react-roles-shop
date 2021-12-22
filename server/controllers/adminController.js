import Order from '../models/OrderCard.js'

class adminController {
    async fetchAllOrders(_, res) {
        try {
            let orders = await Order.find()
            res.send({success: true, orders})
        } catch (e) {
            res.send({success: false, message: 'Error with DB'})
        }
    }

    async changeOrderStatus(req, res) {
        try {
            let result  = await Order.findByIdAndUpdate(req.body.id, {isFinished: req.body.value}, {new: true})
            res.send({success: true, id: result.id})
        } catch (e) {
            res.send({success: false, message: 'Error with DB'})
        }
    }
}

export default new adminController()
