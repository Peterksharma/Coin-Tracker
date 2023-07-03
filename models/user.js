const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js')
const bcrypt = require('bcrypt');

class User extends Model { }

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },

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

User.hasMany(Model.Coin, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
module.exports = User;

  //Primary key


//needs to be dialed in






// //Bcrytpt password hasing
// bcrypt.hash(password, 10, function (err, hash) {
//   // Store hashed password in your User model
// });