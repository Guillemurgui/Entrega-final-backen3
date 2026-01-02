import express from "express";
import usersRouter from "./routes/users.routes.js";
import session from "express-session";
import swaggerUi from "swagger-ui-express";
import { swaggerSpecs } from "./docs/swagger.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use(errorHandler);

app.use(session({
  secret: "coderSecret",
  resave: false,
  saveUninitialized: false
}));

export default app;

