import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "API Backend 3 - Users",
      description: "Documentación del módulo de usuarios"
    }
  },
  apis: ["./src/routes/*.js"]
};

export const swaggerSpecs = swaggerJSDoc(options);
