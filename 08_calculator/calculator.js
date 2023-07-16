const add = function(int1, int2) {
	return int1 + int2;
};

const subtract = function(int1, int2) {
	return int1 - int2;
};

const sum = function(array) {
	let sumArray = 0;
  for (let index in array) {
    sumArray += array[index];
  }
  return sumArray;
};

const multiply = function(...numbers) {
  let productNumbers = 1;
  for (let index in numbers) {
    productNumbers *= numbers[index];
  }
  return productNumbers;
};

const power = function(base, power) {
	let solution = base;
  for (let i = 1; i < power; i++) {
    solution *= base;
  }
  return solution;
};

const factorial = function(number) {
	let solution = 1;
  for (let i = 1; i <= number; i++) {
    solution *= i;
  }
  return solution;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
