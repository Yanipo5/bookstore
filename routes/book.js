const express = require("express");
const router = express.Router();

/**
 * @returns book details by ID
 */
router.get("/:id", (req, res) => {
    res.sendStatus(200);
});

/**
 * @returns create new book
 */
router.post("/", (req, res) => {
    res.sendStatus(200);
});

/**
 * @returns edit book details by ID
 */
router.put("/:id", (req, res) => {
    res.sendStatus(200);
});

/**
 * @returns delete book by id
 */
router.delete("/:id", (req, res) => {
    res.sendStatus(200);
});

module.exports = router;
