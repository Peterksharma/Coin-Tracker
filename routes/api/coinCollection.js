const router = require('express').Router();
const { coins } = require('../../models');

// route to get all the coins
router.get('/', (req, res) => {
    coinCollection.findAll({
        include:{
            model: Coin,
            atrributes: ['name', 'demonmination', 'year', 'mintMark']
        }
    })
    .then (coinData => {
        if(!coinData) {
            res.status(404).json({message: 'Thank you, but you are poor and there are no coins'})
        }
        res.json(coinData);
    })
    .catch(err => {
        console.log(err);
        res.json(500).json(err)
    })
})

// router.get('/', (req, res) => {
//     coinCollection.findOne({
//         include:{
//             model: Coin,
//             atrributes: [`${user Input}`, 'demonmination', 'year', 'mintMark']
//         }
//     })
//     .then (coinData => {
//         if(!coinData) {
//             res.status(404).json({message: 'Thank you, but you are poor and there are no coins'})
//         }
//         res.json(coinData);
//     })
//     .catch(err => {
//         console.log(err);
//         res.json(500).json(err)
//     })
// })