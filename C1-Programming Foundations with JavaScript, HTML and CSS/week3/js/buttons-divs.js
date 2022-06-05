function alertme() {
    alert("THIS IS A USELESS ALERT");
}

var disp = document.getElementById("th");

function changethemelight() {
    var body = document.getElementById("bod");
    var tt = document.getElementById("th");
    tt.innerHTML = "Light";
    tt.className = "darktext"
    body.className = "lighttheme";
}

function changethemedark() {
    var body = document.getElementById("bod");
    var tt = document.getElementById("th");
    tt.innerHTML = "Dark";
    tt.className = "lighttext";
    body.className = "darktheme";
}