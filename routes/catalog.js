const express = require("express");
const router = express.Router();
const knex = require("../util/knex");
const TABLES = require("../util/constants").TABLES;
const booksTable = TABLES.BOOKS;

/**
 * @returns all books names
 */
router.get("/", (req, res) => {
  knex
    .select(booksTable.id, booksTable.title)
    .from(booksTable.name)
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

module.exports = router;
