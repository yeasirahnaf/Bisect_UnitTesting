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

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function fibonacci(n) {
  if (n < 0) return "Fibonacci for negative numbers is undefined";
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function primeFactors(n) {
  const factors = [];
  let divisor = 2;
  while (n > 1) {
    while (n % divisor === 0) {
      factors.push(divisor);
      n /= divisor;
    }
    divisor++;
  }
  return factors.length > 0 ? factors : "No prime factors found";
}

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a + b) / gcd(a, b);
}

function power(a, b) {
  return Math.pow(a, b);
}

function absoluteValue(a) {
  return Math.abs(a);
}

function modulus(a, b) {
  return a % b;
}

async function main() {
  console.log("Choose an operation:");
  console.log("1. Add");
  console.log("2. Subtract");
  console.log("3. Multiply");
  console.log("4. Divide");
  console.log("5. Square");
  console.log("6. Cube");
  console.log("7. Factorial");
  console.log("8. Square Root");
  console.log("9. Is Prime");
  console.log("10. Fibonacci");
  console.log("11. Prime Factors");
  console.log("12. GCD");
  console.log("13. LCM");
  console.log("14. Power");
  console.log("15. Absolute Value");
  console.log("16. Modulus");

  const choice = parseInt(await askQuestion("Enter your choice (1-16): "));
  if (choice >= 1 && choice <= 16) {
    const num1 = parseFloat(await askQuestion("Enter the first number: "));
    let num2;
    if (![5, 6, 7, 8, 9, 10, 11, 15].includes(choice)) {
      num2 = parseFloat(await askQuestion("Enter the second number: "));
    }

    let result;
    switch (choice) {
      case 1:
        result = add(num1, num2);
        break;
      case 2:
        result = subtract(num1, num2);
        break;
      case 3:
        result = multiply(num1, num2);
        break;
      case 4:
        result = divide(num1, num2);
        break;
      case 5:
        result = square(num1);
        break;
      case 6:
        result = cube(num1);
        break;
      case 7:
        result = factorial(num1);
        break;
      case 8:
        result = squareRoot(num1);
        break;
      case 9:
        result = isPrime(num1);
        break;
      case 10:
        result = fibonacci(num1);
        break;
      case 11:
        result = primeFactors(num1);
        break;
      case 12:
        result = gcd(num1, num2);
        break;
      case 13:
        result = lcm(num1, num2);
        break;
      case 14:
        result = power(num1, num2);
        break;
      case 15:
        result = absoluteValue(num1);
        break;
      case 16:
        result = modulus(num1, num2);
        break;
      default:
        result = "Invalid choice";
    }

    console.log("Result:", result);
  } else {
    console.log("Invalid choice. Please restart the program and select a valid option.");
  }

  rl.close();
}

main();

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  square,
  cube,
  factorial,
  squareRoot,
  isPrime,
  fibonacci,
  primeFactors,
  gcd,
  lcm,
  power,
  absoluteValue,
  modulus,
};