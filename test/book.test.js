const app = require("../index.js");
const request = require("supertest")(app);
const assert = require("assert");

var newItemId;

describe("book api routes", function() {
  it("respond with json", () => {
    return request
      .get("/api/book")
      .set("Accept", "application/json")
      .expect(200)
      .then(response => {
        assert(response.body.length > 0);
      });
  });

  it("create new book", () => {
    return request
      .post("/api/book")
      .set("Accept", "application/json")
      .send({
        title: "test-book",
        description: "test-description",
        ISBN: "999999",
        author: "test-author",
        publication_date: new Date("05/01/1950"),
        genre: "Science fiction",
        price: "10"
      })
      .expect(200)
      .then(response => {
        newItemId = response.body.id;
      });
  });

  it("find book by ID", () => {
    return request
      .get(`/api/book/${newItemId}`)
      .set("Accept", "application/json")
      .expect(200)
      .then(response => {
        assert(response.body.id === newItemId);
      });
  });

  it("update book details", () => {
    return request
      .put(`/api/book/`)
      .set("Accept", "application/json")
      .send({
        id: newItemId,
        title: "test-book-change",
        description: "test-description-change",
        ISBN: "999999000",
        author: "test-author-change",
        publication_date: new Date("05/01/1950"),
        genre: "Science fiction",
        price: "10"
      })
      .expect(200)
      .then(() => {
        return request
          .get(`/api/book/${newItemId}`)
          .set("Accept", "application/json")
          .expect(200)
          .then(response => {
            assert(response.body.title === "test-book-change");
          });
      });
  });

  it("Delete book", () => {
    return request
      .delete(`/api/book/${newItemId}`)
      .set("Accept", "application/json")
      .expect(200);
  });
});
