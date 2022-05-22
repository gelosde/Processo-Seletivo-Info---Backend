import app from "../app";
import "reflect-metadata";

import { expect, it, describe } from "@jest/globals";
import request from "supertest";
import veicleTest from "./veicle";

let id: string;

describe("tests for routes off veicle tratament", () => {
  it("this test is to save a new veicle info", async () => {
    const saveNewVeicle = await request(app)
      .post("/veicle/register")
      .send(veicleTest);
    id = saveNewVeicle.body.id;
    expect(saveNewVeicle.status).toBe(201);
  });

  it("this test is to get all veicles info", async () => {
    const getAllVeicles = await request(app).get("/veicle/list");

    expect(getAllVeicles.status).toBe(200);
  });

  it("this test is to get one veicle info", async () => {
    const getOneVeicle = await request(app).get(`/veicle/see/:${id}`);

    expect(getOneVeicle.status).toBe(302);
  });

  it("this test is to update veicle info", async () => {
    const getOneVeicle = await request(app)
      .patch(`/veicle/update/:${id}`)
      .send({ renavam: 333333333 });

    expect(getOneVeicle.status).toBe(200);
  });

  it("this test is to create one arquive with all veicles ", async () => {
    const getArquive = await request(app).get(`/veicle/download/:${id}`);

    expect(getArquive.status).toBe(200);
  });

  it("this test is to delet one arquive", async () => {
    const deleteArquive = await request(app).delete(`/arquive/:${id}`);

    expect(deleteArquive.status).toBe(200);
  });

  it("this test is to delet one veicle", async () => {
    const deleteArquive = await request(app).delete(`/veicle/:${id}`);

    expect(deleteArquive.status).toBe(200);
  });
});
