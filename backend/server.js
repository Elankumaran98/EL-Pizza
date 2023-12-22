const express = require("express");
require("dotenv").config();
const connection = require("./db");
const Pizza = require("./models/pizzaModel");
const app = express();

app.use(express.json());
connection();


const pizzasRoute = require("./routes/pizzasRoute");
app.use("/api/pizzas/", pizzasRoute);


app.get("/", (req, res) => {
  res.send("Server is Working ........" + port);
});



/*
app.get("/getpizzas", async (req, res) => {
  try {
    const pizzas = await Pizza.find({});
    res.json(pizzas); 
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving pizzas"); 
  }
});

*/
const port = process.env.PORT || 9817;

app.listen(port, () => {
  "Server is Working ........ " + port;
});
