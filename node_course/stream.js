/* 
start using data, before it has finished loading 
1. using buffer to send the data
*/

const fs = require('fs')

const readStream = fs.createReadStream('./doc/lstream.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./doc/lstream1.txt')

// readStream.on('data', (chunk) => {
//     console.log('----- New Chunk -----');
//     console.log(chunk);
//     writeStream.write('\nNew Chunk here\n');
//     writeStream.write(chunk);
// })

// Pipe: the same function as the above annotated
readStream.pipe(writeStream)