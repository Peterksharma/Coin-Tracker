//API handles all Json Data
const express = require('express');
const router = express.Router();
const User = require('../../models/user');



router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        await User.create({ username, password });
        res.status(200).json({ message: 'User has been created.'})
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'User could not be registered.'})
    }
})

module.exports = router;