const express = require('express');
const routes = require('./routes');
const passport = require('passport');
const session = require('express-session');
const { engine } = require('express-handlebars');
//Need to update the conenction but this will import
const sequelize = require('./config/connection');
const initializePassport = require('./config/passport')
const app = express();
const PORT = process.env.PORT || 3001;
 
initializePassport(passport)
//Loads the handlebars module
//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', engine());
//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');
app.set('views', './views');

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Express Session Middleware
// need to replace secret with a secret key
app.use(session({ secret: process.env.TOP_SECRET_KEY, resave: true, saveUninitialized: true }));





app.use(routes);


// sync sequelize models to the database, then turn on the server
// force false = true will drop the tables and then recreate them. Keep False
// sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App is listen of the Port ${PORT}`));
// })