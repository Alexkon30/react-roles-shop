import express from 'express'
import mongoose from 'mongoose'
import config from 'config'
import loginRouter from './routes/loginRouter.js'
import adminRouter from './routes/adminRouter.js'
import userRouter from './routes/userRouter.js'
import { corsMiddleware } from './middleware/cors.middleware.js'


const PORT = process.env.PORT || 5000
const app = express()

app
    .use(corsMiddleware)
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use('/', userRouter)
    .use('/login', loginRouter)
    .use('/admin', adminRouter)


mongoose.connect(config.get('dbUrl'), {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(
    () => {
        app.listen(PORT, () => {
            console.log('server was started on: ', PORT);
        })
    }
).catch(err => {
    console.log(err.message)
})
