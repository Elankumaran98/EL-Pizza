const express = require("express");
require("dotenv").config();
const connection = require("./db");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json({ limit: '50mb' })); // For JSON data
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' })); // For URL-encoded data
connection();


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
