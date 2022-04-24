const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

dotenv.config({ path: "./config.env" });

require("./DB/connection");

// const User = require("./Models/UserSchema");
app.use(cors());
app.use(express.json());
app.use(require("./Routes/Auth"));

const PORT = process.env.PORT;

// MIDDLEWARES

const middleware = (req, res, next) => {
  console.log("This is a middleware");
  next();
};

app.get("/", (req, res) => {
  res.send(`Welcome to the HOME`);
});
// app.get("/Arts", (req, res) => {
//   // res.cookie("Test", "Sachin");
//   res.send(`Welcome to the Arts`);
// });
// app.get("/Artists", (req, res) => {
//   res.send(`Welcome to the Artists`);
// });
// app.get("/About", middleware, (req, res) => {
//   console.log("This is about");
//   res.send(`Welcome to the About`);
// });
// app.get("/Login", (req, res) => {
//   res.send(`Welcome to the Login`);
// });
// app.get("/SignUp", (req, res) => {
//   res.send(`Welcome to the SignUp`);
// });
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
