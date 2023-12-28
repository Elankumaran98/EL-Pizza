const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema(
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

const pizzaModel = mongoose.model("pizzas", pizzaSchema);

module.exports = pizzaModel;
