const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/user');

module.exports = function(passport) {
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






// function initialize(passport, getUserByEmail) {
//     const authenicateUser = async (email, passport, done) => {
//         //uses the email for the user (returns user by email)
//         const user = getUserByEmail(email)
//         if (user === null) {
//             return done(null, flase, { message: 'User not found with that email.' })
//         }
//         try {
//             if (await bcrypt.compare(password, user.passport)) {
//                 return done(null, user)
//             } else {
//                 return done(null, flase, { message: 'Password incorrect' })
//             }
//         } catch (err) {
//             return done(e)
//         }
//     }
//     //usernameField will default to user, we can change this from email, its how the username login is set (unique user name or email for login)
//     passport.use(new LocalStrategy({ usernameField: 'email' }), authenicateUser)
//     //user needs to be serialized a deserialized
//     passport.serializeUser((user, done) => { })
//     passport.deserializeUser((id, done) => { })
// }


passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findByPk(id).then((user) => {
        done(null, user);
    }).catch(done);
});
