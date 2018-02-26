const express = require("express");
const router = express.Router();
const Book = require("../../models/book").Book,
  bookController = require("../controllers/book.controller");

/**
 * @returns book details by ID
 */
router.get("/", bookController.getBooks);
router
  .route("/:id")
  /**
   * @param id - book id
   * @returns book details by ID
   */
  .get(bookController.getBook)

  /**
   * @param id - book id (take any number, but will convert to zero to applay auto increment)
   * @returns create new book, and return the book with the new ID
   */
  .post(bookController.createBook)

  /**
   * @param id - book id, (must match body book.id)
   * @returns edit book details by ID
   */
  .put(bookController.updateBook)

  /**
   * @param id - book id
   * @returns delete book by id
   */
  .delete(bookController.removeBooks);

module.exports = router;
