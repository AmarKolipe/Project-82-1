var mouseEvent = "empty";

var last_positionX,last_positionY;

canvas = document.getElementById('myCanvas');

ctx = canvas.getContext("2d");

color = "black";

width_of_line = 1;

canvas.addEventListener("mouseDown", my_mousedown);

function my_mousedown(e)
{

color = document.getElementById("color").value;

width_of_line = document.getElementById("width_of_line").value;

mouseEvent = "mouseDown";

}

canvas.addEventListener("mouseMove", my_mousemove);

function my_mousemove(e)
{

currentpositionofmouseX = e.clientX-canvas.offsetLeft;

currentpositionofmouseY = e.clientY-canvas.offsetTop;

if (mouseEvent == "mouseDown")
{
ctx.beginPath();

ctx.strokeStyle = color;

ctx.lineWidth = linewidth;

console.log("last position of X and Y coordinates are: ");

console.log("X = " + last_positionX + "Y = " + last_positionY);

ctx.moveTo(last_positionX,last_positionY);

console.log("current position of X and Y coordinates are: ");

console.log("X = " + currentpositionofmouseX + "Y = " + currentpositionofmouseY);

ctx.lineTo(currentpositionofmouseX,currentpositionofmouseY);

ctx.stroke();

}
last_positionX = currentpositionofmouseX;

last_positionY = currentpositionofmouseY;

}

canvas.addEventListener("mouseLeave", my_mouseleave);

function my_mouseleave(e)
{

mouseEvent = "mouseLeave";

}

canvas.addEventListener("mouseUp", my_mouseup);

function my_mouseup(e)
{

mouseEvent = "mouseUp"

}