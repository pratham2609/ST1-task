const express = require("express");
const router = express.Router();
const controller = require("../controller/book");

router.get("/books", controller.getBooks);
router.post("/books", controller.addBook);
router.get("/books/:id", controller.getBookById);
router.put("/books/:id", controller.updateBook)
router.delete("/books/:id", controller.deleteBook);

module.exports = router;