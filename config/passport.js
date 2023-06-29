const LocalStrategy = require('passport').Strategy
const bcrypt = require('bcrypt')

function initialize(passport, getUserByEmail) {
    const authenicateUser = async (email, passport, done) => {
        //uses the email for the user (returns user by email)
        const user = getUserByEmail(email)
        if (user === null) {
            return done(null, flase, { message: 'User not found with that email.' })
        }
        try {
            if (await bcrypt.compare(password, user.passport)) {
                return done(null, user)
            } else {
                return done(null, flase, { message: 'Password incorrect' })
            }
        } catch (err) {
            return done(e)
        }
    }
    //usernameField will default to user, we can change this from email, its how the username login is set (unique user name or email for login)
    passport.use(new LocalStrategy({ usernameField: 'email' }), authenicateUser)
    //user needs to be serialized a deserialized
    passport.serializeUser((user, done) => { })
    passport.deserializeUser((id, done) => { })
}

module.exports = initialize



//Starts the Passport App
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
