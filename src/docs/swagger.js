import swaggerJSDoc from "swagger-jsdoc";

export const swaggerOptions = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "API Backend 3",
      version: "1.0.0"
    }
  },
  apis: ["./src/routes/*.js"]
};

export const swaggerSpecs = swaggerJSDoc(swaggerOptions);
