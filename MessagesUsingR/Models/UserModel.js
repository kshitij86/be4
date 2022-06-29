const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    userId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return User;
};
