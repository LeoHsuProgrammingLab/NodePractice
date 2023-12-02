console.log(global);

timeout = 5000
global.setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
}, timeout);

const int = setInterval(() => {
    console.log('in the interval')
}, 1000);

console.log(__dirname)
console.log(__filename)