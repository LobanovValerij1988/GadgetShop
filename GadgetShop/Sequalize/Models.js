const mysql = require("mysql2");
const Sequelize = require("sequelize");
const sequelize = require("./sequalize")

 const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  login: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

 const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  weight: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  dualism: {
    type: Sequelize.BOOLEAN,
    allowNull: true
  },
  graphicsCard: {
    type: Sequelize.STRING,
    allowNull: true
  }
});
 
  const GadgetType = sequelize.define("GadgetType", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
     unique:true
  }
});
GadgetType.hasMany(Product);
module.exports.GadgetType=GadgetType;
module.exports.Product=Product;
module.exports.User=User;





