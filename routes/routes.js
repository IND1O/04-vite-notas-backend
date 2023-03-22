import express from "express";
import {
  createContacto,
  deleteContacto,
  getAllContactos,
  getContacto,
  updateContacto,
} from "../controllers/AgendaController.js";

const rutas = express.Router();

rutas.get("/", getAllContactos);

rutas.get("/:id", getContacto);

rutas.post("/", createContacto);

rutas.put("/:id", updateContacto);

rutas.delete("/:id", deleteContacto);

export default rutas;
