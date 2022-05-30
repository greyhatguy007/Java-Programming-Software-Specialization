function sumPixel(nameimage, xpos, ypos) {
    var img = new SimpleImage(nameimage);
    var r = img.getRed(xpos, ypos);
    var g = img.getGreen(xpos, ypos);
    var b = img.getBlue(xpos, ypos);
    return (r + g + b);
}

var answer1 = sumPixel("drewgreen.png", 250, 500);
var answer2 = sumPixel("drewgreen.png", 10, 10);

console.log(answer1);
console.log(answer2);

/*

OUTPUT: 

272
256
 */