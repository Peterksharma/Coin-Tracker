const express = require('express');
const routes = require('./controllers');
const passport = require('passport');
const session = require('express-session');
const { engine } = require('express-handlebars');
const flash = require('connect-flash');
//Need to update the conenction but this will import
const sequelize = require('./config/connection');
const initializePassport = require('./config/passport')
const userRoutes = require('./controllers/api/userRoutes')
const app = express();
const { User } = require('./models');
const PORT = process.env.PORT || 3001;
const coinRoutes = require('./controllers/api/coinCollectionRoutes')
require('./config/passport')(passport)


initializePassport(passport)

//Loads the handlebars module
//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', engine());
//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');
//points to the views directory to render the pages
app.set('views', './views');


//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// serve up static assets
app.use(express.static('public'));

//Express Session Middleware
// need to replace secret with a secret key
app.use(session({ secret: process.env.TOP_SECRET_KEY, resave: true, saveUninitialized: true }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/user', userRoutes);
app.use(routes)

app.use('/api/coinCollectionRoutes', coinRoutes);

// sync sequelize models to the database, then turn on the server
// force false = true will drop the tables and then recreate them. Keep False unless you need to modify SQL
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App is listen of the Port ${PORT}`));
})