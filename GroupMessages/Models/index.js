const Sequelize = require("sequelize");
const dbconfig = require("../Config/DbConfig.json");
const env = "development";
const dbsetting = dbconfig[env];
const sequelize = new Sequelize(
  dbsetting.database,
  dbsetting.username,
  dbsetting.password,
  dbsetting.dialectinfo
);
const db = { sequelize, Sequelize };
db.user = require("./User")(sequelize, Sequelize);
db.message = require("./Message")(sequelize, Sequelize);
db.groups = require("./Groupsss")(sequelize, Sequelize);

module.exports = db;
