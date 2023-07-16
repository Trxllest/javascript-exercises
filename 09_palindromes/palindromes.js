const palindromes = function (string) {
    let pattern = /[A-z0-9]/g;
    let result = string.match(pattern);
    result = result.join('').toLowerCase();
    let start = 0;
    let end = result.length - 1;
    console.log(result);
    while (start <= end) {
        if (result[start] !== result[end]) {
            console.log(start);
            console.log(end);
            return false;
        }
        start++;
        end--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
