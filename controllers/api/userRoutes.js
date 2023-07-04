//API handles all Json Data
const express = require('express');
const router = express.Router();
const { User } = require('../../models');
const passport = require('passport');


// Registration Route to Create Users
router.post('/register', async (req, res) => {
    try {
        console.log(req.body);
        const { username, password } = req.body;
        const newUser = await User.create({ username, password });
        console.log('User created: ', newUser);
        res.status(200).json({ message: 'User has been created.' })
    } catch (err) {
        console.error(err);
        let message = 'User could not be registered.';
        
        // Sequelize validation error
        if (err.name === 'SequelizeValidationError') {
            message = err.errors.map(e => e.message);
        }
        
        // Sequelize unique constraint error
        if (err.name === 'SequelizeUniqueConstraintError') {
            message = 'Username is already in use.';
        }
        
        console.log('Error message: ', message);
        res.status(500).json({ error: message });
    }
});


//Login Routes
// router.post('/login', (req, res, next) => {
//     passport.authenticate('local', {
//         successRedirect: '/dashboard',
//         failureRedirect: '/users/login',
//         failureFlash: true
//     })(req, res, next);
// });

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        if (!user) {
            return res.status(401).json({ error: 'Login failed', details: info });
        }

        req.login(user, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }

            return res.status(200).json({ message: 'Login successful', user: user });
        });
    })(req, res, next);
});



module.exports = router;