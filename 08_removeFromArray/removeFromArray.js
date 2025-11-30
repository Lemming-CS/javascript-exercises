const removeFromArray = function(arr, ...removeItems) {
    for (let i = 0; i<arr.length; i++) {
        for (const item of removeItems) {
            let itemIndex = arr.indexOf(item);
            if (itemIndex === -1) {
                continue;
            }
            arr.splice(itemIndex, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
