const sumAll = function(int1, int2) {
    // check that both arguments are numbers
    if (typeof(int1) !== 'number' || typeof(int2) !== 'number' ) {
        return 'ERROR';
    }
    // check both arguments are positive ints
    if (int1 < 0 || int2 < 0 ) {
        return 'ERROR';
    }

    // find largest argument
    let startInt;
    let endInt;
     if (int1 <= int2) {
        startInt = int1;
        endInt = int2;
     } else {
        startInt = int2;
        endInt = int1;
     }
    
    // sum numbers
    let sum = 0;
    for (let i = startInt; i <= endInt; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
