import cors from "cors";
import express from "express";
import db from "./database/db.js";
import ContactoRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/contactos", ContactoRoutes);

try {
  await db.authenticate();
  console.log("Conexión Exitosa 👍");
} catch (error) {
  console.log(`El error de conexión es: ${error}`);
}

// app.get("/", (req, res) => {
//   res.send("Hola Mundo");
// });

app.listen(5000, (req, res) => {
  console.log("Server up PORT: 5000 👌");
});
