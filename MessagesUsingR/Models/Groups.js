const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const ChatGroups = sequelize.define("ChatGroups", {
    grpId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });
  return ChatGroups;
};
