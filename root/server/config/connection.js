const Sequelize = require("sequelize");
const sequelize = new Sequelize("task_manager", "root", "1729Light", {
  host: "127.0.0.1",
  dialect: "mysql",
  operatorsAliases: false, 
});

module.exports = sequelize;
