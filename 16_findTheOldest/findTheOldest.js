const findTheOldest = function(arr) {
    let max = -Infinity;
    let index;
    for (let i = 0; i<arr.length; i++) {
        let age;
        if (!arr[i].yearOfDeath) {
            let date = new Date().getFullYear();
            age = date - arr[i].yearOfBirth;
        }
        else {
            age = arr[i].yearOfDeath - arr[i].yearOfBirth;
        }
        if (max < age) {
            max = age;
            index = i;
        }
    }
    return arr[index];

};

// Do not edit below this line
module.exports = findTheOldest;
