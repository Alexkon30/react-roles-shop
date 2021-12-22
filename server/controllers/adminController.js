import Order from '../models/OrderCard.js'
import nodemailer from 'nodemailer'
require('dotenv').config()


class adminController {
    async fetchAllOrders(_, res) {
        try {
            let orders = await Order.find()
            res.send({ success: true, orders })
        } catch (e) {
            res.send({ success: false, message: 'Error with DB' })
        }
    }

    async changeOrderStatus(req, res) {
        try {
            let result = await Order.findByIdAndUpdate(req.body.id, { isFinished: req.body.value }, { new: true })

            if (result.isFinished) {
                let transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false,
                    auth: {
                        user: process.env.USER,
                        pass: process.env.PASS,
                    },
                });

                transporter.sendMail({
                    from: process.env.USER,
                    to: result.email,
                    subject: 'New order',
                    text: '',
                    html: `
                    <div>
                        <h3>New order</h3>
                        <ul>
                            ${result.goods.map(item => `<li>${item}</li>`)}
                        </ul>
                        <p>Thanks for purchase!</p>
                    </div>
                    `
                }, (err) => {
                    if (err) {
                        return console.log(err)
                    }
                    res.send({ success: true, id: result.id })
                })
            } else {
                res.send({ success: true, id: result.id })
            }
        } catch (e) {
            res.send({ success: false, message: 'Error with DB' })
        }
    }
}

export default new adminController()
