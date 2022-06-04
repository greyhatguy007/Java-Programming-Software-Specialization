function pixelOnEdge(image, pixel, horizontalThick, verticalThick) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (x < verticalThick || x > image.getWidth() - verticalThick) {
        return true;
    }
    if (y < horizontalThick || y > image.getHeight() - horizontalThick) {
        return true;
    }
    return false;
}

function addBorders(image, horizontalThick, verticalThick) {
    for (var px of image.values()) {
        if (pixelOnEdge(image, px, horizontalThick, verticalThick)) {
            px = setBlack(px);
        }
    }
    return image;
}

function setBlack(px) {
    px.setRed(0);
    px.setBlue(0);
    px.setGreen(0);
    return px;
}
var img = new SimpleImage("nyc-skyline.jpg");
img = addBorders(img, 40, 20);
print(img);