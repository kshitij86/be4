const express = require("express");
const app = express();
const db = require("./Models");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync({ alter: true }).then(() => {
  console.log("The system is connected to DB");
});

require("./Router/UserRouter");

app.listen(8080, () => {
  console.log("The server is Running Perfectly ");
});
