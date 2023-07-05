const router = require('express').Router();
const { Coin } = require('../../models');

// route to get all the coins
router.get('/', (req, res) => {
    Coin.findAll({
        include: {
            atrributes: ['name', 'denomination', 'year', 'mintMark']

        }
    })
        .then(coinData => {
            if (!coinData) {
                res.status(404).json({ message: 'Thank you, but you are poor and there are no coins' })
            }
            res.json(coinData);
        })
        .catch(err => {
            console.log(err);
            res.json(500).json(err)
        })
})

//get a specific coin
router.get('/:id', (req, res) => {
    coinCollection.findOne({
        where: {
            id: req.params.id
        },
        atrributes: ['name', 'denomination', 'year', 'mintMark']

    })
    .then(coinData => {
        if (!coinData) {
            res.status(404).json({ message: 'No coin found with this id' });
            return;
        }
        res.json(coinData);
    })
        .catch(err => {
            console.log(err);
            res.json(500).json(err)
        })
})

//This route will be for adding a new coin to the collectio
router.post('/', (req, res) => {
    Coin.create({
        name: req.body.name,
        denomination: req.body.denomination,
        year: req.body.year,
        mintMark: req.body.mint
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

module.exports = router;