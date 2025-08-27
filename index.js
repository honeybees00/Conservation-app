setProperty("WaterAppHeader", "color", "teal");
setProperty("subHeader", "color", "Purple");
console.log("hello");
setProperty("WaterAppHeader", "background-color", "");

onEvent("enButton", "click", function () {
    console.log("clicked english.");
    setText("WaterAppHeader", "Water Conservation Tips");
    setText("subHeader", " It's important that we all do our part to use less water. Click through this app for conservation ideas.");
});