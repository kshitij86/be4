const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define("Message", {
    Content: {
      type: Sequelize.STRING,
    },
    msgId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });
  return Message;
};
