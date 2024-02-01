const mongoose = require("mongoose");

const grocerySchema = mongoose.Schema(
  {
    name: { type: "string", required: true },
    varients: [],
    prices: [],
    category: { type: "string", required: true },
    image: { type: "string", required: true },
    description: { type: "string", required: true },
  },
  {
    timestamps: true,
  }
);

const groceryModel = mongoose.model("groceries", grocerySchema);

module.exports = groceryModel;
