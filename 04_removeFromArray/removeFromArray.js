const removeFromArray = function(array, ...nums) {
    const result = array;

    // for each param in nums check the array for its existance and remove it
    for (let num of nums) {
        let len = result.length;
        for (let i = 0; i < len; i++) {
            if (result[i] === num) {
                result.splice(i, 1);
            }
        }
    }
    
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
