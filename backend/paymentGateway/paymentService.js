import { razorpay } from "./razorpayClient";

import Product from '../models/productModel.js'
import User from '../models/userModels.js'

const createPaymentLink = async (orderId) => {
    try {
        const order = await Product.findById(orderId)

        const paymentLinkRequset = {
            amount: order.price*100,
            currency: 'USD',
            customer: {
                name: User.username,
                email: User.email
            },
            notify: {
                sms:true,
                email: true
            },
            reminder_enable: true,
            callback_url : `http://localhost:8088/payment/${orderId}`,
            callback_method: "GET"
        }

        const paymentLink = await razorpay.paymentLink.create(paymentLinkRequset)

    } catch (error) {
        res.status(500).json({Status: false, Error: "Something went wrong"})
    }
}