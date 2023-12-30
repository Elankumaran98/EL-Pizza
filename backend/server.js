const express = require("express");
require("dotenv").config();
const connection = require("./db");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
connection();
app.use(bodyParser.urlencoded({ extended: false })); // For URL-encoded data
app.use(bodyParser.json()); 


const pizzasRoute = require("./routes/pizzasRoute");
const userRoute = require("./routes/userRoute")
const ordersRoute=require('./routes/ordersRoute')

app.use("/api/pizzas/", pizzasRoute);
app.use("/api/users/", userRoute)
app.use("/api/orders/",ordersRoute)


app.get("/", (req, res) => {
  res.send("Server is Working ........" + port);
});


const port = process.env.PORT || 9815;

app.listen(port, () => {
  "Server is Working ........ " + port;
});
