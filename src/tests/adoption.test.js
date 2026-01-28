import request from "supertest";
import { expect } from "chai";
import app from "../app.js";

describe("Tests del módulo Adoption", () => {

  it("GET /api/adoptions → debe devolver un array", async () => {
    const response = await request(app).get("/api/adoptions");

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an("array");
  });

  it("POST /api/adoptions → debe crear una adopción", async () => {
    const newAdoption = {
      user: "65f000000000000000000001",
      petName: "Firulais"
    };

    const response = await request(app)
      .post("/api/adoptions")
      .send(newAdoption);

    expect(response.status).to.equal(201);
    expect(response.body).to.have.property("_id");
    expect(response.body.petName).to.equal("Firulais");
  });

});
