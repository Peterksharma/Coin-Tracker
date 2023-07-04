//will be used for displaying data that is not Json
const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('index.handlebars', {name: 'this is where the name goes'})
    
})
//renders the login page
router.get('/login', (req, res) => {
    res.render('login.handlebars')
})

//renders the register page
router.get('/register', (req, res) => {
    res.render('register.handlebars')
})
//renders the dashboard for where the data will be displayed. This pulls up the handlebars page from Jennie
router.get('/dashboard', async (req, res) => {
    if (req.isAuthenticated()) {
        const userData = await User.findByPk(req.user.id);
        const user = userData.get({ plain: true });
        res.render('dashboard', { user });

    } else {
        res.redirect('/');
    }
});
module.exports = router;

