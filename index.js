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

//drawing while mouse is down and moving
canvas.addEventListener("mousemove", event => {
    if (userDrawing) {
        
        //starts new path for drawing
        context.beginPath();

        //drawing start
        context.moveTo(mouseX, mouseY);

        //drawing end
        context.lineTo(event.offsetX, event.offsetY)

        //draws the line
        context.stroke();

        //so we get proper lines
        mouseX = event.offsetX;
        mouseY = event.offsetY;
    }
})

//not drawing when mouseup
canvas.addEventListener("mouseup", () => {
    userDrawing = false;
})

const button = document.querySelector("#clear");

//clear canvas and enable animation with .shake
button.addEventListener("click", () => {
    canvas.classList.add("shake");

    //clearing canvas
    canvas.width = canvas.width;
    canvas.height = canvas.height;

    //delay removal for animation
    setTimeout(() => {
        canvas.classList.remove("shake")
    }, 1000);
})