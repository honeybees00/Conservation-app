setProperty("WaterAppHeader", "color", "teal");
setProperty("subHeader", "color", "Purple");
console.log("hello");
setProperty("WaterAppHeader", "background-color", "white");

onEvent("enButton", "click", function () {
    document.getElementById("Nextbutton").setAttribute("href", "faucet.html?lang=en");
     console.log("clicked english.");
    setText("WaterAppHeader", "Water Conservation Tips");
    setText("subHeader", " It's important that we all do our part to use less water. Click through this app for conservation ideas.");
});
onEvent("esButton", "click", function () {
    console.log("clicked spanish.");
    document.getElementById("Nextbutton").setAttribute("href", "faucet.html?lang=es");
    setText("WaterAppHeader", "consejos de Conservacion del Aqua");
    setText("subHeader", "Para conservar el agua es importante que todos pongamos de nuestra parte. Haz clic en esta aplicación para ver ideas de cómo hacerlo.");
});
onEvent("button", "click", function () {\
    document.getElementById("clicked Home.")
    console.log("clicked home.");
   
});