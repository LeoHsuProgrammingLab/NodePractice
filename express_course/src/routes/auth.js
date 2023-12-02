const { Router } = require('express');

const router = Router();

router.post('/login', (req, res) => {
    const { username, pwd } = req.body;
    if (username && pwd) {
        if (req.session.user) {
            res.send('You are already logged in!');
        } else {
            req.session.user = {
                username,
            };
            res.send(req.session);
        }
    } else {
        res.sendStatus(401);
    }
});

module.exports = router;