import UserController from "@modules/controller/UserController";

import { Router } from "express";

const userController = new UserController();
const userRoutes = Router()

userRoutes.get('/show',userController.index)
userRoutes.post('/create', userController.execute)

export default userRoutes