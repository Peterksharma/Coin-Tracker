const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Coin extends Model {}

Coin.init(
    {
        id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        denomination: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        mintmark: {
            type: DataTypes.STRING,
            allowNull: true,
        },


    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'coin'
    }
);

module.exports = Coin;