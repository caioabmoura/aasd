import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  "postgres://postgres:123456@127.0.0.1:5432/postgres",
  { dialect: "postgres" }
);

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.NUMBER,
    },
  },
);

async () => {
  await sequelize.sync();
};
export default User;
