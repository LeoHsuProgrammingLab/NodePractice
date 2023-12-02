const { Router } = require('express');
const router = Router();

const gro_list = [
    {
        item: 'milk', 
        quantity: 1,
    }, 
    {
        item: 'cereal', 
        quantity: 2,
    }
];

/*
router.get(
    '/', 
    (req, res, next) => {
        console.log('Before handling');
        next(); // Go to the next middleware function 
    }, 
    (req, res, next) => { // next: invoke next middle ware -> a chain
        res.send(gro_list);
        next();
    },
    () => {
        console.log('Finish request here.')
        // but you cannot send 2 response
    }
);
*/

router.get('/', (req, res) => {
    res.cookie('visited', true, {maxAge: 60000}); // milleseconds
    res.send(gro_list);
});

/*
Route Parameters:
Ex. GET http://localhost:3001/books
*/
router.get('/:item', (req, res) => {
    // console.log(req.header.cookie); replaced by the package installed
    console.log(req.cookies);
    // console.log(req.params.item);
    const { item } = req.params;
    const gro_item = gro_list.find((g) => g.item === item);
    res.send(gro_item);
});

/* Client send data by a POST request */
router.post('/', (req, res, next) => {
    console.log(req.body);
    gro_list.push(req.body);
    res.sendStatus(201);
});

router.get('/shopping/cart', (req, res) => {
    const { cart } = req.session;
    console.log('Cart')
    if(!cart) {
        res.send("You have no cart session!");
    } else {
        res.send(cart);
    }
});

router.post('/shopping/cart/item', (req, res) => {
    const {item, quantity} = req.body;
    const cartItem = {item, quantity};
    const { cart } = req.session;
    if (cart) {
        req.session.cart.items.push(cartItem);
    } else {
        req.session.cart = {
            items: [cartItem],

        };
    }
    // res.send(req.sessionID); // give use the ID
    res.sendStatus(201); 
});

module.exports = router;