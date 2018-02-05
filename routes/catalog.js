const express = require("express");
const router = express.Router();

/**
 * @returns all books names
 */
router.get("/", (req, res) => {
    res.sendStatus(200);
});

module.exports = router;
