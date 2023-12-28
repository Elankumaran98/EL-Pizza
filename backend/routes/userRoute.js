const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new User({ name, email, password });

  try {
    await newUser.save(); // Use await for promise-based save
    res.send("User Registered Successfully");
  } catch (error) {
    res.status(400).json({ message: error.message }); // Send specific error message
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !user.comparePassword(password)) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({ user }); // Send user data upon successful login
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;