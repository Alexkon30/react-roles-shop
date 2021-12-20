import { Router } from "express";
import userController from "../controllers/userController.js";

const userRouter = new Router()

userRouter.get('/', userController.check)

export default userRouter
