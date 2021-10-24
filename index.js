const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, "public")));

app.get("/forms/results", (req, res) => {res.send("OK")});

app.post("/forms/results", (req, res) => {});

app.listen(port);
console.log(`Server started at http://localhost:${port}`);
