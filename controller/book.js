const bookSchema = require("../model/bookSchema");

const getBooks = async (req, res) => {
    try {
        const user = await bookSchema.find();
        res.status(200).json(user);
    }
    catch {
        res.status(500).json({ message: "Books not fetched" })
    }

}

const addBook = async (req, res) => {
    try {
        const { title, author, genre, publicationYear, ISBN } = req.body;
        const newBook = await bookSchema.create({ title, author, genre, publicationYear, ISBN })
        res.status(200).json({ message: "Book Added", newBook })
    }
    catch {
        res.status(500).json({ message: "Book not added" })
    }
}

const getBookById = async (req, res) => {
    const id = req.params.id;
    try {
        const book = await bookSchema.findById(id)
        if (!book) {
            res.status(404).json({ message: "No Book found" })
        }
        res.status(200).json(book)
    } catch {
        res.status(500).json({ message: "Error fetching book by Id" })
    }
}

const updateBook = async (req, res) => {
    let user;
    const id = req.params.id;
    const { title, author, genre, publicationYear, ISBN } = req.body;
    try {
        user = await bookSchema.findByIdAndUpdate(id, {
            title, author, genre, publicationYear, ISBN
        })
        user = await user.save().then(() => res.json({ message: "updated" }))
    } catch {
        res.status(500).json({ message: "not updated" })
    }
}

const deleteBook = async (req, res) => {
    const id = req.params.id;
    try {
        await bookSchema.findByIdAndDelete(id)
            .then(() => res.status(200).json({ message: "deleted" }))
    }
    catch {
        res.status(500).json({ message: "not deleted" })
    }
}

module.exports = {
    addBook, getBooks, getBookById, updateBook, deleteBook
}








