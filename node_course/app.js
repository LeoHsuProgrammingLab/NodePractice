const express = require('express');

// invoke express app
const app = express();

// create server: listen for req
app.listen(3000);

// Below segment is like a if-else segment
app.get('/', (req, res) => {
    /* res.write('')
       res.end()*/
    /*set the status code and infer the content type header 
    res.send('<p>home page</p>'); */

    res.sendFile('./views/index.html', { root: __dirname}); // __dirname: pwd in js
});

app.get('/about', (req, res) => { 
    res.sendFile('./views/about.html', {root: __dirname}); 
});

// redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 page
app.use((req, res) => { // regardless of url, if we come here, it is 404
    res.status(404).sendFile('./views/404.html', {root: __dirname});
});