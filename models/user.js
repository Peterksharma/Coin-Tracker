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
const fs = require('fs');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js')

class users extends Model { }

users.init(
  {

    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  },

  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);

        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User,

  //Primary key


  bcrypt.hash(password, 10, function (err, hash) {
    // Store hashed password in your User model
  });
//needs to be dialed in
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await User.sync({ force: true }); // Drops the table and re-creates it

    for (const obj of data) {
      await User.create(obj);
    }

    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
})();

