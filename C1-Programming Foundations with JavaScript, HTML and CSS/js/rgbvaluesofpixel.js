function printPixel(nameimage, xpos, ypos) {
    var img = new SimpleImage(nameimage);
    var r = img.getRed(xpos, ypos);
    var g = img.getGreen(xpos, ypos);
    var b = img.getBlue(xpos, ypos);
    console.log("red is  ", r);
    console.log("green is ", g);
    console.log("blue is ", b);
}

printPixel("drewgreen.png", 10, 10);
printPixel("drewgreen.png", 250, 500);

/*

OUTPUT:

red is 0
green is 255
blue is 0
red is 102
green is 90
blue is 80


*/