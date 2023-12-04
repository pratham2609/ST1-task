const express = require("express");
const app = express();
const router = require("./routes/books")
require('dotenv').config();
const PORT = process.env.PORT || 4000

app.use(express.json());
const connectDatabase = require("./config/db")
connectDatabase();

app.get("/", (req, res) => {
    res.send("Welcome");
})
app.use("/api/v1", router);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})