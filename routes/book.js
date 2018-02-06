const express = require("express");
const router = express.Router();
const Book = require('../models/book').Book

/**
 * @returns book details by ID
 */
router.get("/:id", (req, res) => {
    const id = req.params.id;
    Book.where({ 'id': id })
        .fetch()
        .then(book => {
            res.json(book)
        }).catch(err => {
            res.sendStatus(204);
        })
});

/**
 * @returns create new book, and return the book with the new ID
 */
router.post("/", (req, res) => {
    const book = req.body;
    book.publication_date = new Date(book.publication_date)
    Book.forge(book)
        .save()
        .then(savedBook => {
            res.json(savedBook);
        }).catch(err => {
            res.sendStatus(400);
        })
});

/**
 * @returns edit book details by ID
 */
router.put("/", (req, res) => {
    let book = req.body;
    book.publication_date = new Date(book.publication_date);
    book.updated_at = new Date();
    delete book.created_at;

    console.log(book);
    Book.forge({ id: book.id })
        .save(book)
        .then(() => {
            res.sendStatus(200);
        }).catch(err => {
            console.log(err);
            res.sendStatus(400);
        })
});

/**
 * @returns delete book by id
 */
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    Book.where({ 'id': id })
        .destroy()
        .then(() => {
            res.sendStatus(200);
        }).catch(err => {
            res.sendStatus(204);
        })
});

module.exports = router;
