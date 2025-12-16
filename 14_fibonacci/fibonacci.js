const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS"
    }
    if (n == 0) {
        return 0;
    }
    let f = 0;
    let j = 1;
    for (let i = 1; i < n; i++) {
        let buffer = j;
        j += f;
        f = buffer;
    }
    return j;
};

// Do not edit below this line
module.exports = fibonacci;
