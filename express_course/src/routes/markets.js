const { Router } = require('express');

const router = Router();

const supermarkets = [
    {
        id: 1,
        store: 'Whole Foods',
        miles: 0.6,
    }, 
    {
        id: 2,
        store: 'Trader Joes',
        miles: 0.9,
    }, 
    {
        id: 3,
        store: 'LeBron James',
        miles: 2.7,
    }
]

router.get('/', (req, res) => {
    const { miles } = req.query;
    const parsedMiles = parseInt(miles);
    if (!isNaN(parsedMiles)) {
        const filteredStore = supermarkets.filter((s) => s.miles <= parsedMiles);
        res.send(filteredStore);
    } else {
        res.send(supermarkets);
    }
});

module.exports = router;