import express from 'express'
import mongoose from 'mongoose'
import loginRouter from './routes/loginRouter.js'
import adminRouter from './routes/adminRouter.js'
import userRouter from './routes/userRouter.js'
import { corsMiddleware } from './middleware/cors.middleware.js'
require('dotenv').config()


const app = express()

app
    .use(corsMiddleware)
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use('/', userRouter)
    .use('/login', loginRouter)
    .use('/admin', adminRouter)


mongoose
    .connect(config.get(process.env.DB_URI), {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => {
            app.listen(process.env.PORT, () => {
                console.log('server was started on: ', process.env.PORT);
            })
        })
    .catch(err => {
        console.log(err.message)
    })
