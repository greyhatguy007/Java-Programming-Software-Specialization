function doBlue() {
    var canvas = document.getElementById("c1");
    canvas.style.backgroundColor = "blue";
}

function doColor() {
    var canvas = document.getElementById("c1");
    var colorinput = document.getElementById("clr");
    canvas.style.backgroundColor = colorinput.value;
}

function doSquare() {
    var canvas = document.getElementById("c1");
    var sldr = document.getElementById("slr");
    var len = sldr.value
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "yellow";
    context.fillRect(10, 10, len, len);
}