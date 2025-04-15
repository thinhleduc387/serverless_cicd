const request = require("supertest");
const { app, server } = require("../index.js");

describe("API Tests", () => {
  afterAll(() => {
    server.close();
  });

  test("GET / endpoint works", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message");
  });

  test("GET /health returns healthy status", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("status", "healthy");
  });
});
