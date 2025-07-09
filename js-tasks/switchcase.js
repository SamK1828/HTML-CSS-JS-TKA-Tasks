// ================================
// 📘 JavaScript Switch Case Homework
// ================================

// 1. Print month name by number
function printMonthByNumber(month) {
  switch (month) {
    case 1: console.log("January"); break;
    case 2: console.log("February"); break;
    case 3: console.log("March"); break;
    case 4: console.log("April"); break;
    case 5: console.log("May"); break;
    case 6: console.log("June"); break;
    case 7: console.log("July"); break;
    case 8: console.log("August"); break;
    case 9: console.log("September"); break;
    case 10: console.log("October"); break;
    case 11: console.log("November"); break;
    case 12: console.log("December"); break;
    default: console.log("Invalid month number");
  }
}

// 2. Perform basic arithmetic operations
function performOperation(a, b, operator) {
  switch (operator) {
    case '+': console.log("Result =", a + b); break;
    case '-': console.log("Result =", a - b); break;
    case '*': console.log("Result =", a * b); break;
    case '/':
      if (b !== 0) {
        console.log("Result =", a / b);
      } else {
        console.log("Cannot divide by zero");
      }
      break;
    default: console.log("Invalid operator");
  }
}

// 3. Grade description using switch
function gradeDescription(grade) {
  switch (grade.toUpperCase()) {
    case 'A': console.log("Excellent"); break;
    case 'B': console.log("Good"); break;
    case 'C': console.log("Average"); break;
    case 'D': console.log("Poor"); break;
    case 'F': console.log("Fail"); break;
    default: console.log("Invalid grade");
  }
}

// ================================
// 📌 Example Calls (Uncomment to test)
// ================================

// printMonthByNumber(4);
// performOperation(10, 5, '*');
// gradeDescription('B');
