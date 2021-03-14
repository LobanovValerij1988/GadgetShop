const mysql = require("mysql2");
const Sequelize = require("sequelize");
const config = require("../Config/config");

const sequelize=new Sequelize("shopproducts", config.login, config.password, {
    dialect: "mysql",
    host:config.host
  });  

  module.exports =sequelize;