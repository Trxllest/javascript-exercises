const reverseString = function(string) {
    // var for result
    let str = '';
    let lengthS = string.length

    // iterate backwords through string and append it to result
    for (i = lengthS-1; i >= 0; i--) {
        str = str + string[i];
    }
    return str;
};

// Do not edit below this line
module.exports = reverseString;
