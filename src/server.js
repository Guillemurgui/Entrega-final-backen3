
import app from "./app.js";
import { connectMongoDB } from "./config/mongo.js";

const PORT = 8080;

connectMongoDB();

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});

