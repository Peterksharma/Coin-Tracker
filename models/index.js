const User = require('./user');
const Coin = require('./coins');

User.hasMany(Coin, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Coin.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Coin };