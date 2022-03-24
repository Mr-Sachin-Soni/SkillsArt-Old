const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

require("../DB/connection");
const User = require("../Models/UserSchema");

router.get("/", (req, res) => {
  res.send(`Welcome to the SERVER HOME `);
});
// *******************Using Promises**************
// router.post("/Register", (req, res) => {
//   const { name, email, password, cpassword } = req.body;

//   if (!name || !email || !password || !cpassword) {
//     return res
//       .status(422)
//       .json({ Error: "Please fill all the fields correctly" });
//   }
//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ Error: "Email already exist" });
//       }
//       const user = new User({ name, email, password, cpassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "User Registered Successfully" });
//         })
//         .catch((err) => res.status(500).json({ error: "Registration Failed" }));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
// ***********Async - Await***********
router.post("/SignUp", async (req, res) => {
  const { name, email, password, cpassword } = req.body;

  if (!name || !email || !password || !cpassword) {
    return res
      .status(422)
      .json({ Error: "Please fill all the fields correctly" });
  }
  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ Error: "Email already exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ Error: "Inavalid Confirm Password" });
    } else {
      const user = new User({ name, email, password, cpassword });

      await user.save();

      res.status(201).json({ message: "User Registered Successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// ********LOGIN ROUTE********

router.post("/Login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please fill the data" });
    }
    const userLogin = await User.findOne({ email: email });
    // console.log(userLogin);
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();
      // console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Inavalid Credentials" });
      } else {
        res.json({ message: "User login Successfully" });
      }
    } else {
      res.status(400).json({ error: "Inavalid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
