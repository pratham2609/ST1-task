const mongoose = require("mongoose");

const book = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: [true, "Book with same title already exists"],
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    genre: {
        type: String,
        required: true,
        trim: true
    },
    publicationYear: {
        type: Number,
        required: true,
        trim: true
    },
    ISBN: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model("Book", book);