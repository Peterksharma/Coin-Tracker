const fs = require('fs');
const sequelize = require('./config/connection.js');
const User = require('./models/User.js');
const fileContent = fs.readFileSync('data.json', 'utf-8');
const data = JSON.parse(fileContent);

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