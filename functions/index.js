// Return if a number is even
function isEven(number) {
  if (number % 2 === 0) return true;
  else return false;
}
var inputEven = Number(prompt("Enter a number to know if it's even or not:"));
var resultEven = isEven(inputEven);
console.log(resultEven);

// Return the factorial of a number
function factorial(number) {
  let sum = 1;
  if (number === 0) return 1;
  for (let i = 1; i <= number; i++) {
    sum = sum * i;
  }
  return sum;
}
var inputFactorial = Number(prompt("Enter a number to know it's factorial:"));
var resultFactorial = factorial(inputFactorial);
console.log(resultFactorial);

// Return string in kebab notation with snake notation
function kebabToSnake(string) {
  if (string.indexOf("-") === -1) return string;
  return string.replace(/-/g, "_");
}
var inputKebabToSnake = prompt(
  "Enter the kebab notation string you wish to convert into snake notation:"
);
var resultKebabToSnake = kebabToSnake(inputKebabToSnake);
console.log(resultKebabToSnake);
