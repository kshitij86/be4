const express = require("express");
const app = express();
const db = require("./Models");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync({ force: true }).then((resp) => {
  console.log("The system is connected to DB");
});

require("./Routes/User")(app);
require("./Routes/Message")(app);
require("./Routes/CreatingThe Group")(app);

app.listen(7070, () => {
  console.log("The server is Running Perfectly ");
});
