onEvent("my-button", "click", toggleLanguage);
setProperty("bottleChoice", "backgroundColor", "green");
setText("message", "Great choice!");
playSound("success.mp3");

// Language button
const mybutton = document.getElementById("languageBtn");
if (languageBtn) {
  languageBtn.addEventListener("click", toggleLanguage);
}

// Bottle choice styling
const bottleChoice = document.getElementById("bottleChoice");
if (bottleChoice) {
  bottleChoice.style.backgroundColor = "green";
}

// Message text
const message = document.getElementById("message");
if (message) {
  message.textContent = "Great choice!";
}

// Sound playing
const audio = new Audio("success.mp3");
audio.play();

// Get element by ID
const myElement = document.getElementById("myId");

// Get elements by CSS selector
const oneElement = document.querySelector(".myClass");
const allElements = document.querySelectorAll(".myClass");

// Add event listener
if (myElement) {
  myElement.addEventListener("click", function() {
    console.log("Clicked!");
  });
}

// Example input element
const inputElement = document.getElementById("inputElement");
if (inputElement) {
  inputElement.value = "New value";
}

// Text & HTML content
if (myElement) {
  myElement.textContent = "New text";
  myElement.innerHTML = "<strong>Bold text</strong>";
}

// Style changes
if (myElement) {
  myElement.style.color = "red";
  myElement.style.backgroundColor = "blue";
  myElement.classList.add("highlight");
}


