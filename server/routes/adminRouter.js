import { Router } from "express";
import adminController from "../controllers/adminController.js";

const adminRouter = new Router()

adminRouter.get('/', adminController.check)

export default adminRouter
