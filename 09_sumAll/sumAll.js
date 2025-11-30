const sumAll = function(a, b) {
    if (a < 0 || b < 0 || typeof(a) != "number" || typeof(b) != "number" || a % 1 !== 0 || b % 1 !== 0) {
        return 'ERROR'
    }
    if (a > b) {
        [b, a] = [a, b];
    }
    let sum = 0;
    for (let i=a; i<=b; i++) {
        sum +=i;
    } 
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
