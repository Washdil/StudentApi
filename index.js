const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
dotenv.config();

connectDB();

const app = express();
app.use("api/students", require("./routes/route"));

app.get("/", (req, res) => {
    res.send("Student CRUD api Running")
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is listening at ${PORT}`)
});