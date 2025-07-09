# JavaScript Homework and Practice Repository

This repository contains practice examples and concepts for core JavaScript programming including:

- Loops
- Conditional Statements
- Arrays
- Strings
- Objects
- Functions (regular and arrow)
- DOM Manipulation
- Operators
- Integration with HTML

---

## 🧠 JavaScript Fundamentals

---

### ✅ Arrays

```javascript
let arr = [1, 2, 3];
````

**Common Methods:**

| Method         | Description                      |
| -------------- | -------------------------------- |
| `push()`       | Adds an element to the end       |
| `pop()`        | Removes the last element         |
| `shift()`      | Removes the first element        |
| `unshift()`    | Adds an element to the beginning |
| `sort()`       | Sorts the array in-place         |
| `toSorted()`   | Returns a new sorted array       |
| `reverse()`    | Reverses the array in-place      |
| `toReversed()` | Returns a new reversed array     |

---

### ✅ Strings

```javascript
let str = "Hello, World!";
let str2 = 'Single quote string';
```

**String Methods:**

| Method             | Description                             |
| ------------------ | --------------------------------------- |
| `length`           | Returns string length                   |
| `toUpperCase()`    | Converts to uppercase                   |
| `toLowerCase()`    | Converts to lowercase                   |
| `substring(a, b)`  | Returns substring between indexes a & b |
| `indexOf(value)`   | Finds index of first occurrence         |
| `split(separator)` | Splits string into an array             |

---

### ✅ Objects

```javascript
let obj = {
  name: 'John',
  age: 30
};

console.log(obj.name);
console.log(obj['age']);
```

**Object Methods:**

| Method               | Description                |
| -------------------- | -------------------------- |
| `Object.keys(obj)`   | Returns an array of keys   |
| `Object.values(obj)` | Returns an array of values |

---

### ✅ Operators

**1. Arithmetic Operators**

```javascript
+  // Addition
-  // Subtraction
*  // Multiplication
** // Exponentiation
/  // Division
%  // Modulus
++ // Increment
-- // Decrement
```

**2. Comparison Operators**

```javascript
==    // Equal value
===   // Equal value and type
!=    // Not equal
!==   // Not equal value or type
>     // Greater than
<     // Less than
>=    // Greater than or equal to
<=    // Less than or equal to
```

**3. Logical Operators**

```javascript
&& // AND
|| // OR
!  // NOT
```

---

## 🔁 Conditional Statements

### If / Else If / Else

```javascript
if (condition1) {
  // Code block
} else if (condition2) {
  // Another block
} else {
  // Fallback
}
```

### Switch Case

```javascript
switch(expression) {
  case x:
    // Block
    break;
  case y:
    // Block
    break;
  default:
    // Fallback block
}
```

---

## 🔄 Loops

### For Loop

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### While Loop

```javascript
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

---

## 📦 Functions

### Basic Function

```javascript
function Hello() {
  console.log("Very Hard");
}

Hello();
```

### Parameterized Function

```javascript
function Students(Name) {
  console.log("Students " + Name);
}

Students("Ritik");
```

### Return Function Example

```javascript
function add(a, b) {
  return a * b;
}
console.log(add(4, 6));
```

---

## 💥 Arrow Functions

```javascript
let subtract = (a, b) => a - b;
```

---

## 🌐 JavaScript in HTML

### DOM Function Example

```html
<body>
  <h1 id="t">HTML Content</h1>
  <button onclick="Bluecolor()">Blue</button>
  <button onclick="Redcolor()">Red</button>

  <script>
    function Bluecolor() {
      t.style.color = 'blue';
      t.textContent = 'Blue Color Function';
    }

    function Redcolor() {
      t.style.color = 'red';
      t.textContent = 'Red Color Function';
    }
  </script>
</body>
```

---

## 🧑‍💻 JavaScript Object with Methods

### Object with Methods Example:

```javascript
const person = {
  firstName: "Samarth",
  middleName: "Deelip",
  lastName: "Kalegaonkar",
  id: 5566,
  givefullName: function () {
    return this.firstName + " " + this.middleName + " " + this.lastName;
  },
  givefullNameReverseInUpperCase: function () {
    return (this.lastName + " " + this.middleName + " " + this.firstName).toUpperCase();
  }
};

document.getElementById("fullNameId").innerHTML = person.givefullName();

let text = "";
for (let x in person) {
  text += person[x] + " ";
}
document.getElementById("descriptionId").innerText = text;

let myString = JSON.stringify(person);
document.getElementById("descriptionId1").innerHTML = myString;
```

---

## 📄 Sample HTML Element Structure

To work with the DOM example, your HTML should have the following IDs:

```html
<div id="demo"></div>
<div id="innerTextID"></div>
<div id="fullNameId"></div>
<div id="descriptionId"></div>
<div id="descriptionId1"></div>
```

---

## 🚀 Author

**Samarth Deelip Kalegaonkar**
GitHub: [SamK1828](https://github.com/SamK1828)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
