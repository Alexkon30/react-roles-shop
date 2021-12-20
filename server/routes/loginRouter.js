// login/
import Router from 'express'
import loginController from '../controllers/loginController.js'

const loginRouter = new Router()

loginRouter.get('/', loginController.checkAuth)

export default loginRouter
