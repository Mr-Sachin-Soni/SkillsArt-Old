const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
  .connect(
    "mongodb+srv://sachin11122001:Jhankya1112@cluster0.76iv0.mongodb.net/SkillsArt_DB2?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log(err.message));
