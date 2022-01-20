const { performance } = require('perf_hooks');

function isPrime (num) {
    let i;

    for (i = 2; i < num; i++) { if (num % i === 0) return false; }

    return num > 1;
}

function countPrimeNumbers () {
    var count = 0;
    var RetFunc;
    let i;

    for (i = 2; i < 100; i++) {
        RetFunc = isPrime(i);

        if (RetFunc === true) {
            count += 1;
        }
    }
    return count;
}

var time1 = performance.now();
countPrimeNumbers();
var time2 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${time2 - time1} milliseconds.`);
