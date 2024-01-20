const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const multer = require("multer");
const storage = multer.memoryStorage(); 
const upload = multer({ storage });

router.post("/register", upload.single("photo"), async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const photo = req.file; 

    if (!photo) {
      return res.status(400).json({ message: "Photo is required" });
    }

    const newUser = new User({
      name,
      email,
      password,
      photo: photo.buffer.toString("base64"), 
    });

    await newUser.save();
    res.send("User Registered Successfully");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      };
      res.send(currentUser);
    }

    if (!user || !user.comparePassword(password)) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" + error });
  }
});

router.post("/deleteuser", async (req, res) => {
  const userid = req.body.userid;

  try {
    await User.findOneAndDelete({ _id: userid });
    res.send("User Deleted Successfully");
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" + error });
  }
});

module.exports = router;
