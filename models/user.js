const fs = require('fs');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js')
const fileContent = fs.readFileSync('data.json', 'utf-8');
const data = JSON.parse(fileContent);

class Users extends Model { }

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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

module.exports = User,

  //Primary key


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





//Bcrytpt password hasing
bcrypt.hash(password, 10, function (err, hash) {
  // Store hashed password in your User model
});