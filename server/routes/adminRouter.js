import { Router } from "express";
import adminController from "../controllers/adminController.js";

const adminRouter = new Router()

adminRouter.get('/', adminController.fetchAllOrders)
adminRouter.post('/', adminController.changeOrderStatus)

export default adminRouter
