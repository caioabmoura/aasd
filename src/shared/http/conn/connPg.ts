import { Sequelize } from "sequelize";
import AppError from "../errors/AppError";

const URL =
  "postgres://postgres:123456@127.0.0.1:5432/postgres";
const sequelize = new Sequelize(URL);

sequelize

  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    throw new AppError("not connected", 500);
  });
