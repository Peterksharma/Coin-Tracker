module.exports = (sequelize, DataTypes) => {
    const Coin = sequelize.define('Coin', {
        name: DataTypes.STRING,
        denomination: DataTypes.FLOAT,
        year: DataTypes.INTEGER,
        mintMark: DataTypes.STRING
    });
    return Coin;
};

// FILEPATH: /Users/pedro/Documents/Bootcamp/Homework/Project-2/seeds/coinSeedData.js
const db = require('../models');
const mintMarks = ['D', 'S', 'P'];

//Washington Quarters
let washingtonQuarter = [];

for (let year = 1932; year <= 1998; year++) {
    for (let mark of mintMarks) {
        washingtonQuarter.push({
            name: 'Washington Quarter',
            denomination: 0.25,
            year: year,
            mintMark: mark
        });
    }
}

db.Coin.bulkCreate(washingtonQuarter)
    .then(() => {
        console.log('Washington Quarters inserted successfully');
    })
    .catch((err) => {
        console.error('Unable to insert Washington Quarters', err);
    });

// console.log('this log is working')