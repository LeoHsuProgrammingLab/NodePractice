const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// const mongoose = require('mongoose');
const groceriesRoute = require('./routes/groceries');
const marketsRoute = require('./routes/markets');
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');

const app = express();
const PORT = 3001;

// mongoose
//     .connect('mongodb://localhost:27017/express_tutorial')
//     .then(() => {console.log('Connected to DB')})
//     .catch((err) => {console.log(err)});

/*
middleware: 
A function called in a lifecycle ex. compute 2 numbers.
The below middleware register must be before other middleware
*/
app.use(express.json());
app.use(express.urlencoded());
app.use((req, res, next) => {
    console.log(`${req.method}: ${req.url}`);
    next();
});
app.use(cookieParser());

app.use(session({
    secret: 'qwert',
    resave: false,
    saveUninitialized: false,
}));
// register the login route before protection
app.use('/api/v1/auth', authRoute);
app.use((req, res, next) => {
    if(req.session.user) {
        next();
    } else {
        console.log('what?');
        res.sendStatus(401);
    }
});

// Register the routers!
app.use('/api/v1/groceries', groceriesRoute);
app.use('/api/v1/markets', marketsRoute);
app.use('/api/v1/users', usersRoute);

app.listen(PORT, (req, res) => {
    console.log(`Hey in PORT ${PORT}`)
});

// Query Parameters
// Ex. https://google.com/?q=java&filterBy=

// Cookie
// Saved on the client side: stored in the browser, and it is dangerous

// Sessions
// Saved on the server side, safe and separate from the client side
// But client side needs a cookie for session id on server side