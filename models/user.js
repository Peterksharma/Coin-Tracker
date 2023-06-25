// const sequelize = require('sequelize');

// DROP DATABASE IF EXISTS coins

// const sequelize = new Sequelize //(databasename, username, password, {
//   //host: database host,
//   //dialect: database driver,
// //});

// const {DataTypes} = require ('sequelize');

// const User = sequelize.define(User, {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },

//   userName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// })

const {Model, DataTypes} = require ('sequelize');
const sequelize = require('../config/connection.js')

class users extends Model {}

users.init 

//Primary key


bcrypt.hash(password, 10, function(err, hash) {
    // Store hashed password in your User model
  });