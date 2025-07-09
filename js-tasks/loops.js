// ================================
// 📘 JavaScript Loops Homework
// Each problem wrapped in a function
// ================================

// 1. Print first 10 natural numbers using while loop
function printFirst10NaturalNumbers() {
  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
}

// 2. Sum of numbers from 1 to 100 using for loop
function sumFrom1To100() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log("Sum from 1 to 100 is:", sum);
}

// 3. Print all even numbers between 1 and 50 using for loop
function printEvenNumbers1To50() {
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// 4. Factorial of a number using while loop
function factorial(n) {
  let result = 1;
  while (n > 1) {
    result *= n;
    n--;
  }
  console.log("Factorial is:", result);
}

// 5. Reverse a number using while loop
function reverseNumber(num) {
  let reversed = 0;
  while (num !== 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  console.log("Reversed number:", reversed);
}

// 6. Fibonacci series up to n terms using for loop
function fibonacciSeries(n) {
  let a = 0, b = 1;
  console.log(a);
  console.log(b);
  for (let i = 2; i < n; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
  }
}

// 7. Check if a number is prime using for loop
function isPrime(n) {
  if (n < 2) {
    console.log(n + " is not a prime number.");
    return;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      console.log(n + " is not a prime number.");
      return;
    }
  }
  console.log(n + " is a prime number.");
}

// 8. Count the number of digits in a number using while loop
function countDigits(num) {
  let count = 0;
  while (num !== 0) {
    num = Math.floor(num / 10);
    count++;
  }
  console.log("Number of digits:", count);
}

// 9. Calculate power using for loop
function calculatePower(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  console.log(`${base}^${exponent} = ${result}`);
}

// 10. Print all prime numbers between 1 and 100 using nested loops
function printAllPrimes1To100() {
  for (let num = 2; num <= 100; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(num);
    }
  }
}

// printFirst10NaturalNumbers();
// sumFrom1To100();
// printEvenNumbers1To50();
// factorial(5);
// reverseNumber(12345);
// fibonacciSeries(10);
// isPrime(29);
// countDigits(123456);
// calculatePower(2, 5);
// printAllPrimes1To100();
