
import userRoutes from "@modules/routes/user.routes";
import { Router } from "express";

const routes = Router();

routes.use("/user", userRoutes );

export default routes