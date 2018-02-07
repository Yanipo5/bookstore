const app = require("../index.js");
const request = require("supertest")(app);
const assert = require("assert");

describe("Catalog routes", function() {
  it("respond with json", function() {
    return request
      .get("/api/catalog")
      .set("Accept", "application/json")
      .expect(200)
      .then(response => {
        assert(response.body.length > 0);
      });
  });
});
