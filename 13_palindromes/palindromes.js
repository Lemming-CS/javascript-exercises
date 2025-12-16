const palindromes = function (word) {
    word = word.toLowerCase().split('').filter( (item) => item.match(/\w+/)).join('');
    revWord = word.split('').reverse().join('');
    console.log('Cleaned word: ' + word);
    return revWord === word;
};

// Do not edit below this line
module.exports = palindromes;
