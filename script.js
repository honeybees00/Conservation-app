onEvent("languageBtn", "click", toggleLanguage);
setProperty("bottleChoice", "backgroundColor", "green");
setText("message", "Great choice!");
playSound("success.mp3");

// Event handling
const languageBtn = document.getElementById("languageBtn");
if (languageBtn) {
    languageBtn.addEventListener("click", toggleLanguage);
}
// Property setting
const bottleChoice = document.getElementById("bottleChoice");
if (bottleChoice) {
    bottleChoice.style.backgroundColor = "green";
}

// Text setting
const message = document.getElementById("message");
if (message) {
    message.textContent = "Great choice!";
}

// Sound playing
const audio = new Audio("success.mp3");
audio.play();
// Get element by ID
const element = document.getElementById("myId");


// Get element by CSS selector
const element = document.querySelector(".myClass");
const elements = document.querySelectorAll(".myClass");

// Add event listener
element.addEventListener("click", function() {
    console.log("Clicked!");
});

// Remove event listener
element.removeEventListener("click", handlerFunction);
document.getElementById();
addEventListener();
// Text content
element.textContent = "New text";

// HTML content
element.innerHTML = "<strong>Bold text</strong>";

// Input values
inputElement.value = "New value";
// Text content
element.textContent = "New text";

// HTML content
element.innerHTML = "<strong>Bold text</strong>";

// Input values
inputElement.value = "New value";
// Individual properties
element.style.color = "red";
element.style.backgroundColor = "blue";

// Multiple properties
element.style.cssText = "color: red; background-color: blue;";

// CSS classes
element.classList.add("highlight");
element.classList.remove("highlight");
element.classList.toggle("highlight");
element.classList.add("highlight");
element.classList.remove("highlight");
element.classList.toggle("highlight");
// Create and play audio
const audio = new Audio("sound.mp3");
audio.play();
audio.pause();
audio.loop = true;
