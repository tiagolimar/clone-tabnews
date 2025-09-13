import database from "../../../../../infra/database.js";

test("GET to /api/v1/status should return status 200", async () => {
  console.log((await database.query("SELECT 1+1 as sum;")).rows);
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});
