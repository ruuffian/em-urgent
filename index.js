const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

const app = express();
const port = process.env.PORT;

// app.route("/", )
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname + "view")));
// app.get("/view/staff", (req, res) => {
//   res.sendFile(path.join(__dirname, "public/view/staff.html"));
// });
app.listen(port);
console.log(`Server started at http://localhost:${port}`);
