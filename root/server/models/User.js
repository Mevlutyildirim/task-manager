const connection = require('../config/connection');
const Sequelize = require('sequelize');

module.exports = connection.define('user', {
  id :{
    type: connection.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },

});