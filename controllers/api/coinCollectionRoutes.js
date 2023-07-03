const router = require('express').Router();
const { coins } = require('../../models');

// route to get all the coins
router.get('/', (req, res) => {
    coinCollection.findAll({
        include: {
            model: Coin,
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

// //get a specific coin
// router.get('/:id', (req, res) => {
//     coinCollection.findOne({
//         include: {
//             model: Coin,
//             atrributes: ['name', 'denomination', 'year', 'mintMark']
//         }
//     })
//         .catch(err => {
//             console.log(err);
//             res.json(500).json(err)
//         })
// })

//This route will be for adding a new coin to the collectio
router.post('/api/ismypennyworthamillionpennies', (req, res) => {
    res.json(`${req.method}Your coin has been added`)
        .then(coinData => res.json(coinData))
        .catch(err => {
        })
    console.log(err);
    res.json(500).json(err)
})