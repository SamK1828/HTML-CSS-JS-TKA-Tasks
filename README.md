# 🧠 JavaScript Practice & Concepts Repository

This repository contains fundamental and intermediate JavaScript programs structured by topics like:

- 🔁 Loops
- 🔍 If-Else Conditions
- 🔄 Switch-Case
- 🌐 DOM (Document Object Model)
- 🧭 BOM (Browser Object Model)
- 🧰 Utility Functions (Toggle, Styling, Counting, etc.)

---

## 📂 Sections

### ✅ Loops
A collection of loop-based problems:

- Print first 10 natural numbers using a while loop.
- Sum of numbers from 1 to 100 using a for loop.
- Print even numbers between 1 and 50.
- Find factorial using while loop (user input).
- Reverse a number using while loop.
- Fibonacci series up to N (user input).
- Check prime using a for loop.
- Count digits in a number using while loop.
- Power of a number using for loop.
- Print all prime numbers from 1 to 100 using nested loops.

Each problem is implemented as a separate function inside the `loops.js` file.

---

### 🧠 If-Else Conditions

- Largest of 3 numbers
- Leap year check
- Vowel or consonant
- Positive, negative, or zero
- Grading system (A/B/C/D)
- Palindrome string
- Divisible by both 3 and 7

These are located in `ifelse.js`.

---

### 🌀 Switch-Case

- Number to Month
- Grade evaluation (A–F)
- Arithmetic operations based on user choice

Located in `switchcase.js`.

---

## 🌐 DOM (Document Object Model)

The DOM is a tree-like structure representing the content of a web page. JavaScript uses DOM methods to manipulate elements.

### 📌 Common Methods

| Method                          | Description                              |
|---------------------------------|------------------------------------------|
| `getElementById(id)`            | Selects a single element by ID           |
| `getElementsByClassName(class)`| Selects all elements with given class    |
| `querySelector(selector)`      | First element matching CSS selector      |
| `createElement(tagName)`       | Creates new HTML element                 |
| `appendChild(child)`           | Appends child node                       |
| `removeChild(child)`           | Removes child node                       |

### 📌 Usage

- Modify text with `.innerText` / `.innerHTML`
- Change styles using `.style.property`

---

## 🧭 BOM (Browser Object Model)

The BOM allows JavaScript to interact with the **browser window**.

### 🪟 `window` Object Methods

| Method         | Description                                      |
|----------------|--------------------------------------------------|
| `alert()`      | Display message box                              |
| `confirm()`    | Display confirmation dialog                      |
| `prompt()`     | Display input box                                |
| `open()`       | Open new tab or window                           |
| `setTimeout()` | Delay function execution                         |

### 🌐 `navigator` Object

| Property        | Description                        |
|-----------------|------------------------------------|
| `appCodeName`   | Browser code name                  |
| `appName`       | Browser name                       |
| `appVersion`    | Browser version                    |
| `cookieEnabled` | Check if cookies are enabled       |
| `language`      | User's browser language            |
| `userAgent`     | Full browser and OS info           |
| `platform`      | Device platform                    |
| `onLine`        | Online status                      |

### 🖥️ `screen` Object

| Property       | Description                          |
|----------------|--------------------------------------|
| `width`        | Screen width                         |
| `height`       | Screen height                        |
| `availWidth`   | Available width                      |
| `availHeight`  | Available height                     |
| `colorDepth`   | Bits per color                       |
| `pixelDepth`   | Bits per pixel                       |

---

## 🧰 Utility DOM Functions

- **Increase Font Size for Class Elements:**

```js
function increaseNoteFontSize() {
  const notes = document.getElementsByClassName("note");
  for (let i = 0; i < notes.length; i++) {
    notes[i].style.fontSize = "24px";
  }
}
````

* **Show Image on Button Click:**

```js
function showImage() {
  document.getElementById("myImage").style.display = "block";
}
```

* **Toggle Visibility of Elements with Class "item":**

```js
function toggleItems() {
  const items = document.getElementsByClassName("item");
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = items[i].style.display === "none" ? "block" : "none";
  }
}
```

* **Apply Different Colors to "box" Class:**

```js
function applyColorsToBoxes() {
  const boxes = document.getElementsByClassName("box");
  const colors = ["red", "green", "blue", "orange", "purple"];
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = colors[i % colors.length];
  }
}
```

* **Count Elements with Class "item":**

```js
function countItems() {
  const items = document.getElementsByClassName("item");
  alert(`Total number of .item elements: ${items.length}`);
}
```

* **Make Text of All `.item` Elements Uppercase:**

```js
function makeItemsUppercase() {
  const items = document.getElementsByClassName("item");
  for (let i = 0; i < items.length; i++) {
    items[i].innerText = items[i].innerText.toUpperCase();
  }
}
```

---

## 🧠 JavaScript Fundamentals Summary

### 📚 Arrays

| Method         | Description                 |
| -------------- | --------------------------- |
| `push()`       | Add at end                  |
| `pop()`        | Remove last                 |
| `shift()`      | Remove first                |
| `unshift()`    | Add at start                |
| `sort()`       | Sort (in-place)             |
| `toSorted()`   | Sort (returns new array)    |
| `reverse()`    | Reverse (in-place)          |
| `toReversed()` | Reverse (returns new array) |

---

### 📚 Strings

| Method          | Description                   |
| --------------- | ----------------------------- |
| `length`        | Get string length             |
| `toUpperCase()` | Convert to uppercase          |
| `toLowerCase()` | Convert to lowercase          |
| `substring()`   | Get part of a string          |
| `indexOf()`     | First occurrence of substring |
| `split()`       | Convert string to array       |

---

### 📚 Objects

```js
let obj = { name: "John", age: 30 };
console.log(obj.name);
console.log(obj["age"]);
```

| Method               | Description             |
| -------------------- | ----------------------- |
| `Object.keys(obj)`   | Returns array of keys   |
| `Object.values(obj)` | Returns array of values |

---

### 📚 Operators

#### Arithmetic:

`+`, `-`, `*`, `/`, `%`, `**`, `++`, `--`

#### Comparison:

`==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`

#### Logical:

`&&`, `||`, `!`

---

### 📚 Conditional Statements

#### If / Else / Else If

```js
if (condition) {
  // do this
} else if (otherCondition) {
  // do this
} else {
  // fallback
}
```

#### Switch Statement

```js
switch(expression) {
  case "A":
    // do something
    break;
  default:
    // fallback
}
```

---

### 📚 Functions

```js
function add(a, b) {
  return a + b;
}
```

#### Arrow Function

```js
let subtract = (a, b) => a - b;
```

---

## ✅ Contribution

This project was built as part of learning and practicing JavaScript and DOM/BOM manipulation.

---

## ✅ Author

**Samarth Kalegaonkar**
Intern @ Kiran Academy
Built with ❤️ to guide future learners & juniors!

---

## ✅ License

This project is open source and available under the [MIT License](LICENSE).
