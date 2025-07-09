// ================================
// 📘 JavaScript If-Else Homework
// ================================

// 1. Find the largest of three numbers
function findLargestOfThree(a, b, c) {
  if (a >= b && a >= c) {
    console.log("Largest number is:", a);
  } else if (b >= a && b >= c) {
    console.log("Largest number is:", b);
  } else {
    console.log("Largest number is:", c);
  }
}

// 2. Check whether a year is a leap year
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }
}

// 3. Check if character is a vowel or consonant
function isVowelOrConsonant(char) {
  const vowels = "aeiouAEIOU";
  if (char.length === 1 && char.match(/[a-zA-Z]/)) {
    if (vowels.includes(char)) {
      console.log(char + " is a vowel.");
    } else {
      console.log(char + " is a consonant.");
    }
  } else {
    console.log("Invalid input.");
  }
}

// 4. Check if a number is positive, negative, or zero
function checkNumberSign(num) {
  if (num > 0) {
    console.log("Positive number");
  } else if (num < 0) {
    console.log("Negative number");
  } else {
    console.log("Zero");
  }
}

// 5. Find grade based on marks
function findGrade(marks) {
  if (marks > 90) {
    console.log("Grade A");
  } else if (marks > 75) {
    console.log("Grade B");
  } else if (marks > 50) {
    console.log("Grade C");
  } else {
    console.log("Grade D");
  }
}

// 6. Check if a string is a palindrome
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  if (cleaned === reversed) {
    console.log("Palindrome");
  } else {
    console.log("Not a palindrome");
  }
}

// 7. Check if number is divisible by both 3 and 7
function isDivisibleBy3And7(num) {
  if (num % 3 === 0 && num % 7 === 0) {
    console.log(num + " is divisible by both 3 and 7.");
  } else {
    console.log(num + " is not divisible by both 3 and 7.");
  }
}

// ================================
// 📌 Example Calls (Uncomment to test)
// ================================

// findLargestOfThree(10, 20, 15);
// isLeapYear(2024);
// isVowelOrConsonant('e');
// checkNumberSign(-5);
// findGrade(87);
// isPalindrome("madam");
// isDivisibleBy3And7(21);
