const fs = require('fs');
/* */
// reading files
fs.readFile('./doc/james.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line');

// writing files
fs.writeFile('./doc/blog1.txt', 'Hello, ninjas!', () => {
    console.log('file was written');
});

// directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        } 
        console.log('folder created');
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted');
    })
}

// deleting files
if (fs.existsSync('./doc/deleteme.txt')) {
    fs.unlink('./doc/deletme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted');
    })
}