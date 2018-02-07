const app = require("../index.js");
const request = require("supertest")(app);
const assert = require("assert");

var newItemId;

describe("book routes", function() {
  it("create new book", function() {
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

  it("find book by ID", function() {
    return request
      .get(`/api/book/${newItemId}`)
      .set("Accept", "application/json")
      .expect(200)
      .then(response => {
        assert(response.body.id === newItemId);
      });
  });

  it("update book details", function() {
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

  it("Delete book", function() {
    return request
      .delete(`/api/book/${newItemId}`)
      .set("Accept", "application/json")
      .expect(200);
  });
});
