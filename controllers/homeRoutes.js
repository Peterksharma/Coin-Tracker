//will be used for displaying data that is not Json
const router = require('express').Router()
const {User, Coin} = require('../models');


router.get('/', (req, res) => {
    res.render('index.handlebars', { name: 'this is where the name goes' })

})
//renders the register page
router.get('/register', (req, res) => {
    res.render('register.handlebars')
})

// Middleware to check if the user is authenticated
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        // Redirects un-logged in users to the homepage
        res.redirect('/');
    }
}

router.get('/dashboard', ensureAuthenticated, async (req, res) => {
    const userData = await User.findByPk(req.user.id);
    const user = userData.get({ plain: true });
    const coinData = await Coin.findAll({ where: { user_id: req.user.id } });
    const coinCount = coinData ? coinData.length : 0;  //<--added to display 0 for null count of coins. 
    res.render('dashboard', { user, coinCount });
});


module.exports = router;

