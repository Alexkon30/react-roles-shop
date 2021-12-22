import Router from 'express'
import loginController from '../controllers/loginController.js'

const loginRouter = new Router()

loginRouter.post('/new', loginController.createNewUser)
loginRouter.post('/check', loginController.checkAuth)

export default loginRouter
