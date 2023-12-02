const { Router } = require('express');
const db = require('../db/database');

const router = Router();

// router.use((req, res) => {
//     console.log('Request made to /USERS ROUTE');
//     next();
// });

router.get('/', (req, res) => {
    console.log('welcome to users')
    res.sendStatus(200);
});

router.post('/', (req, res) => {
    const {name, hobby} = req.body;
    console.log('Give me your hobby');
    console.log(name, hobby);
    if (name && hobby) {
        console.log(name, hobby, "Hi")
        try {
            db.promise().query(
                `
                INSERT INTO users (name, hobby) VALUES ('${name}', '${hobby}') ;
                `
            );
            res.status(201).send({msg: "Created User"})
        } catch(err) {
            console.log(err);
        }
    }
});

module.exports = router;