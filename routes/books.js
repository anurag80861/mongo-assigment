const express = require('express')
const router = express.Router()
const fs = require('fs');
const Book = require("../models/books");

router.get("/", async (req, res) => {
    let result = await Book.find()
    res.json(result)
});

router.post("/", async (req, res) => {
    console.log(req.body);
    const result = await Book.create(req.body)
    res.json(result)
});

router.put("/:title", async (req, res) => {
    const books = await Book.findOne({ title: req.params.title })
    Object.assign(books, req.body)
    await books.save()
    res.json(books)
});

router.delete("/:title", async (req, res) => {
    await Book.findOneAndDelete({ title: req.params.title })
    res.json({ message: "Book is deleted sucessfully" })
});
router.get("/genre/:genre", async (req, res) => {
    const result = await Book.find({ genre: req.params.genre })
    res.json(result)
});

module.exports = router