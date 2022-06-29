const Sequelize = require("sequelize");
const dbconfig = require("../Config/Db.Config.json");

const env = "development";
const dbsetting = dbconfig[env];
const sequelize = new Sequelize(
  dbsetting.database,
  dbsetting.username,
  dbsetting.password,
  dbsetting.dialectinfo
);
const db = { sequelize, Sequelize };
db.user = require("./UserModel")(sequelize, Sequelize);
db.message = require("./Messages")(sequelize, Sequelize);
db.group = require("./Groups")(sequelize, Sequelize);

db.user.belongsToMany(db.group, {
  through: "GRP",
  foreignKey: "Id",
  through: "Id",
});

db.group.belongsToMany(db.user, {
  through: "GRP",
  foreignKey: "Id",
  through: "Id",
});

db.user.belongsToMany(db.message, {
  through: "MUS",
  foreignKey: "msgId",
  through: "Id",
});

db.message.belongsToMany(db.user, {
  through: "MUS",
  foreignKey: "Id",
  through: "msgId",
});

module.exports = db;
