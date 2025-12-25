import mongoose from "mongoose";
import app from "./app.js";

const PORT = 8080;

mongoose.connect("mongodb://localhost:27017/backend3final")
  .then(() => {
    console.log("Conectado a MongoDB");
    app.listen(PORT, () =>
      console.log("Servidor escuchando en puerto " + PORT)
    );
  })
  .catch(err => console.error(err));
