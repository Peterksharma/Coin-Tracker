const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Coin extends Model {}

Coin.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        coin_id: {
            type: DataTypes.INTEGER,
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

        user_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
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