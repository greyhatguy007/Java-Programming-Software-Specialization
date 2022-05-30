function numberPixels(namefile) {
    var image = new SimpleImage(namefile);
    var height = image.getHeight();
    var width = image.getWidth();
    return height * width;
}
var result1 = numberPixels("chapel.png");
var result2 = numberPixels("dinos.png");

console.log(result1);
console.log(result2);

//  OUTPUT:
//  71148
//  2073600