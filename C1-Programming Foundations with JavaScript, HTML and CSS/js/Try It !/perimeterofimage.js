function perimeter(namefile) {
    var image = new SimpleImage(namefile);
    var height = image.getHeight();
    var width = image.getWidth();
    return (2 * (height + width))
}


console.log(perimeter("rodger.png"))

//  OUTPUT:
//  1478