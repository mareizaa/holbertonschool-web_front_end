const { performance } = require('perf_hooks');

function isPrime(num) {
    let i;

    for (i = 2; i < num; i++) { if (num % i === 0) return false; }
    return num > 1;
}

function countPrimeNumbers() {
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

function way() {
    var time1 = performance.now();

    setTimeout(() => {
        let i;
        for (i = 0; i < 100; i++) {
            countPrimeNumbers();
        }
    }
    , 0)
    var time2 = performance.now();

    console.log(`Execution time of calculating prime numbers 100 times was ${time2 - time1} milliseconds`);
}

way();