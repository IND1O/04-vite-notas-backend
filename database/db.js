import { Sequelize } from "sequelize";

const db = new Sequelize("agenda_app", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
