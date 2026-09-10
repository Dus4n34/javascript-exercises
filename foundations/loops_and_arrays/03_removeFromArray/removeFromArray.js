const removeFromArray = function(array, values) {
    let arr = arguments[0];
    let toRemove = [];
    for(let i = 1; i < arguments.length; i++) {
        toRemove.push(arguments[i]);
    }
    return arr.filter(value => !toRemove.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
