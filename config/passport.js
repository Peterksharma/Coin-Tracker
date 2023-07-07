const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/user');

// module.exports = function(passport) 
function initialize(passport) {
    passport.use(
        new LocalStrategy({ usernameField:'username' }, (username, password, done) => {
            User.findOne({
                where: {
                    username: username
                }
            }) .then(user => {
                if (!user) {
                    //3 arguments of done are error, user, and info object
                    return done(null, false, { message: 'User not found.'})
                }
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, {message:'Not the correct password.'})
                    }
                })
            })
        })
    )
}

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findByPk(id).then((user) => {
        done(null, user);
    }).catch(done);
});

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/'); //we could add a redirect page here
}

initialize(passport);

module.exports = {
    passport: passport,
    isAuthenticated: isAuthenticated
}