import { Router } from "express";
import userController from "../controllers/userController.js";

const userRouter = new Router()

userRouter.get('/', userController.fetchAllGoods)
userRouter.post('/', userController.newOrder)

export default userRouter
