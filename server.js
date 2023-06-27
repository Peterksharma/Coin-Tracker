const express = require('express');
const routes = require('./routes');
// const sequelize = require('./config/connection');
const passport = require('passport');
// require('./config/passport')(passport);
const app = express();
const PORT = process.env.PORT || 3001;

//Loads the handlebars module
const { engine } = require('express-handlebars');
//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', engine());
//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');
app.set('views', './views');

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Express Session Middleware
//need to replace secret with a secret key
// app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));

// // Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser(function (user, done) {
//     done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
//     User.findByPk(id).then((user) => {
//         done(null, user);
//     }).catch(done);
// });

// //connects the login route with the authenticate
// app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));

app.use(routes);


// sync sequelize models to the database, then turn on the server

// sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App is listen of the Port ${PORT}`));
// })