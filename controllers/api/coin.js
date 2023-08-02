const router = require('express').Router();
const { Coin } = require('../../models');


//This route will be for adding a new coin to the collectio
router.post('/', (req, res) => {
    Coin.create({   
        user_id: req.user.id,
        name: req.body.name,
        denomination: req.body.denomination,
        year: req.body.year,
        mint: req.body.mint
    })
    .then(coinData =>  res.json({
        message: `Coin has beed added to the database`,
        coin: coinData
    }))
    .catch(err => {
        console.error(err);
        res.status(500).json({error: "coin has not been added", details: err})
    });
})

router.get('/user/:userId', async (req, res) => {
    try {
        const coins = await Coin.findAll({ where: { user_id: req.params.userId } });
        res.json(coins);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "Cannot retrieve coins", details: err})
    }
});

module.exports = router;