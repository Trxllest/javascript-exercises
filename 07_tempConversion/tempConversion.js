const convertToCelsius = function(degreeFahrenheit) {
  // conversion
  let degreeCelsius = (degreeFahrenheit - 32) * (5 / 9);

  // rounding
  degreeCelsius = Math.round(degreeCelsius * 10) / 10;

  return degreeCelsius;
};

const convertToFahrenheit = function(degreeCelsius) {
  // conversion 
  let degreeFahrenheit = (degreeCelsius * (9 / 5) + 32);

  // rounding
  degreeFahrenheit = Math.round(degreeFahrenheit * 10) / 10;

  return degreeFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
