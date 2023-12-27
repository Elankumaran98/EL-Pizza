const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
    isAdmin: {
      type: "Boolean",
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports=mongoose.model('users',userSchema)