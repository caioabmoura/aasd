import CreateUser from "@modules/services/CreateUser";
import { Request, Response } from "express";

export default class UserController {
  public async execute(req: Request, res: Response) {
    const createUser = new CreateUser();
    const { name, age } = req.body;

    const user = await createUser.execute({ name, age });

    return res.json(user);
  }

  public async index(req: Request, res: Response) {
    const createUser = new CreateUser();

    const users = await createUser.index();

    return res.json(users);
  }
}
