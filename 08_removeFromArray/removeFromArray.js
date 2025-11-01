const removeFromArray = function(arr, ...args) {
    for(let i = arr.length - 1; i >= 0; i--) {
        if(args.includes(arr[i])) {
            arr.splice(i, 1)
        }
    }
    return arr
};

removeFromArray([1,2,3,4], 3)
// Do not edit below this line
module.exports = removeFromArray;
