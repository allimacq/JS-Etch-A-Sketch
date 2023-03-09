const canvas = document.querySelector("#etch-a-sketch");

//want to draw in 2d
const context = canvas.getContext("2d");
context.lineWidth = 2;

//initializing mouse position
let mouseX = 0;
let mouseY = 0;

//boolean to determine if user is drawing
let userDrawing = false;

canvas.addEventListener("mousedown", event => {
    userDrawing = true;

    //setting mouse position between canvas and its padding
    mouseX = event.offsetX;
    mouseY = event.offsetY;
})