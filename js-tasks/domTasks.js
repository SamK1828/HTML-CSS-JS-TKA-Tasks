// Practise Questions on Dom :

// Change Text by ID
// Create a function that changes the text of an element with id="title" to "Welcome to My Page".
function changeText() {
  let obj = document.getElementById("title");
  obj.style.backgroundColor = "skyblue";
  // obj.style.color=""
  obj.style.marginRight = "200px";
  obj.innerText = "Welcome to My Page";
}
// Change Background by Class
// Change the background color of all elements with class="highlight" to yellow.
function changeBackground1() {
  let obj = document.getElementsByClassName("highlight1");
  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];
    element.style.backgroundColor = "yellow";
  }

  obj = document.getElementsByClassName("highlight2");
  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];
    element.style.backgroundColor = "white";
  }
}

function changeBackground2() {
  let obj = document.getElementsByClassName("highlight2");
  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];
    element.style.backgroundColor = "yellow";
  }
  obj = document.getElementsByClassName("highlight1");
  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];
    element.style.backgroundColor = "white";
  }
}

function changeBackground3() {
  let obj = document.getElementsByClassName("highlight1");
  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];
    element.style.backgroundColor = "white";
  }

  obj = document.getElementsByClassName("highlight2");
  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];
    element.style.backgroundColor = "white";
  }
}

// Hide an Element by ID
// Write a function that hides an element with id="box1" by setting display: none.

function hideContent() {
  let obj = document.getElementById("box1");
  obj.style.display = "none";
}

function showContent() {
  let obj = document.getElementById("box1");
  obj.style.display = "block";
}
// Increase Font Size of Class Elements
// Use a loop to set the font size to 24px for all elements with class="note".
function changeFontSize() {
  let obj = document.getElementsByClassName("note");
  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];
    element.style.fontSize = "24px";
  }
}
// Set Image Width by ID
// Create a function that sets the width of an image with id="profilePic" to 200px.

function showImage() {
  document.getElementById("image").style.display = "flex";
  document.getElementById("profilePic").style.cssText="display:block; width:200px; margin:10px; border-radius: 50%;";
  // document.getElementById("image").style.justifyItems="center";
}

function hideImage() {
  document.getElementById("image").style.display = "none";
  // document.getElementById("image").style.justifyItems="center";
}
// Toggle Visibility
// Write a function that toggles visibility of all "item" class elements (if visible â†’ hide, if hidden â†’ show).

// Apply Different Colors
// Use a loop to apply different colors to elements with class "box", like:

// js
// Copy
// Edit
// ["red", "green", "blue", "orange", "purple"]
// Add Border
// Add a function that applies a 2px solid black border to all elements with class "frame".

// Count Items
// Write a function that shows an alert with the total number of elements with class "item".

// Make All Text Uppercase
// Convert the inner text of all "item" class elements to uppercase.
