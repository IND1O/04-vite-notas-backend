import db from "../database/db.js";
import { DataTypes } from "sequelize";

const AgendaModel = db.define("contactos", {
  nombre: { type: DataTypes.STRING },
  apodo: { type: DataTypes.STRING },
  telefono: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  profesion: { type: DataTypes.STRING },
  nacionalidad: { type: DataTypes.STRING },
  foto: { type: DataTypes.STRING },
});

export default AgendaModel;
