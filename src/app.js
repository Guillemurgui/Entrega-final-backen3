import express from "express";
import session from "express-session";
import swaggerUi from "swagger-ui-express";

import usersRouter from "./routes/users.routes.js";
import adoptionRouter from "./routes/adoption.router.js";

import { swaggerSpecs } from "./docs/swagger.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

// middlewares base
app.use(express.json());

// sesiones
app.use(session({
  secret: "coderSecret",
  resave: false,
  saveUninitialized: false
}));

// rutas
app.use("/api/users", usersRouter);
app.use("/api/adoptions", adoptionRouter);

// swagger
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));


app.use(errorHandler);

export default app;


