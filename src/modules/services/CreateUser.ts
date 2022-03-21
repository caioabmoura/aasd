import User from "@modules/model/User";
import AppError from "@shared/http/errors/AppError";

interface IRequest {
  name: string;
  age: number;
}
export default class CreateUser {
  public async execute({ name, age }: IRequest) {
    const user = await User.build({
      name: name,
      age: age,
    });

    user.save();
    return user;
  }

  public async index() {
    const user = await User.findAll({ raw: true });

    if(!user) {
      throw new AppError('does not have any user', 401)
    }

    return user;
  }
}
