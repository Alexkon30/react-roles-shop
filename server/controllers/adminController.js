import Order from '../models/OrderCard.js'
import nodemailer from 'nodemailer'

class adminController {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            secure: false,
            port: 587,
            auth: {
              user: "AlexKon243546@gmail.com",
              pass: 'TestFront94.',
            },
          })
    }

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
            // if (result.isFinished) {
            //     this.transporter.sendMail({
            //         from: 'AlexKon243546@gmail.com',
            //         to: result.email,
            //         subject: 'New order',
            //         text: 'test',
            //         html: `
            //         <div>
            //             <h3>New order</h3>
            //             <ul>
            //                 ${result.goods.map(item => `<li>${item}</li>`)}
            //             </ul>
            //             <p>Thanks for purchase!</p>
            //         </div>
            //         `
            //     }, (err, res) => {
            //         if (err) {
            //             console.log(err)
            //         }
            //     })
            // }
            res.send({success: true, id: result.id})
        } catch (e) {
            res.send({success: false, message: 'Error with DB'})
        }
    }
}

export default new adminController()
