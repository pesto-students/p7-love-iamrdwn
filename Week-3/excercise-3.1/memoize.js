function memoize(fn) {
    cache = {};
    return function (...args) {
        key = args.toString();
        if (cache.hasOwnProperty(key)) {
            return cache.key;
        } else {
            cache.key = fn(...args);
            return cache.key;
        }
    }
};

function add(a, b) {
    return a + b;
};
const memoizeAdd = memoize(add);
let startTime = performance.now();
console.log(memoizeAdd(2, 4));
console.log(memoizeAdd(5, 10));
console.log(memoizeAdd(2, 4));
console.log(memoizeAdd(5, 10));
let endTime = performance.now();
console.log(`Time is ${endTime - startTime}`);