function chaprightyellow(x, y, r, g, b, image) {
    for (var pixel of img.values()) {
        if ((pixel.getX() > img.getWidth() - x) && (pixel.getY() < y)) {
            pixel.setRed(r);
            pixel.setGreen(g)
            pixel.setBlue(b);
        }
    }
    return img;
}

var img = new SimpleImage("chapel.png");

img = chaprightyellow(30, 60, 255, 255, 0, img);
img = chaprightyellow(60, 30, 0, 0, 255, img);
img = chaprightyellow(30, 30, 0, 255, 0, img);

print(img);