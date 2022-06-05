function changeColor() {
    var can1 = document.getElementById("c1");
    var can2 = document.getElementById("c2");
    if (can1.style.backgroundColor != "blue") {
        can1.style.backgroundColor = "blue";
        can2.style.backgroundColor = "orangered";
    } else {
        can1.style.backgroundColor = "black";
        can2.style.backgroundColor = "black";
    }
}

function makebluepink() {
    var can1 = document.getElementById("c1");
    var can2 = document.getElementById("c2");
    can1.style.backgroundColor = "blue";
    can2.style.backgroundColor = "plum";
}