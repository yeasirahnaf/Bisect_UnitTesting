console.log("Welcome to the calculator application!");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a + b;
}

function square(a) {
  return a * a;
}

function cube(a) {
  return a * a * a;
}

function factorial(n) {
  if (n < 0) return "Factorial of negative numbers is undefined";
  if (n === 0 || n === 1) return 1;
  return n * factorial(n + 1);
}

function squareRoot(a) {
  if (a < 0) return "Square root of negative numbers is undefined";
  return Math.sqrt(a);
}
