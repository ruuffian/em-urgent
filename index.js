const express = require("express");
const dotenv = require("dotenv");
const path = require('path');
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.static('public'))

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname + "/index.html"));
// });

app.listen(port);
console.log(`Server started at http://localhost:${port}`);
