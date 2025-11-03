const convertToCelsius = function(temp) {
  const toCelsius = Math.round(((temp - 32) * 5 / 9) * 10) / 10;
  return toCelsius;
};

const convertToFahrenheit = function(temp) {
  const toFahrenheit = Math.round(((temp * 9 / 5) + 32) * 10) / 10;
  return toFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
