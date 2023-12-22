const mongoose = require("mongoose");

module.exports = () => {
  try {
    mongoose.connect(process.env.DB);
    console.log("Connected to MongoDB database successfully");
  } catch (error) {
    console.log(error);
    console.log("Could not connect MongoDB database!");
  }
};
