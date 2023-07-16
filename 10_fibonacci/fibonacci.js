const fibonacci = function(k) {
    k = Number(k);
    if (k === 0) return 0;
    if (k === 1 || k === 2) {
        return 1;
    }
    if (k < 1) return 'OOPS';
    let kMinus1 = 1;
    let kMinus2 = 1;
    let kthIndex = 3;
    let kthValue = 2;
    while (kthIndex < k) {
        kthIndex += 1;
        kMinus2 = kMinus1;
        kMinus1 = kthValue;
        kthValue = kMinus1 + kMinus2;
    }
    return kthValue;
};

// Do not edit below this line
module.exports = fibonacci;
