const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    // The application is executed on Heroku, use the linked database (MySQL)
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    // The application is executed on the local machine
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT || 3306,
            dialect: 'mysql',
            pool: {
                max: 5,
                min: 0,
                idle: 10000,
            },
        },
    );
}

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });


// Export the sequelize object
module.exports = sequelize;
