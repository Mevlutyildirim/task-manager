const Sequelize = require('sequelize');
const sequelize = new Sequelize('taskManager', 'root', '1729Light', {host:'127.0.0.1'});

module.exports = sequelize;