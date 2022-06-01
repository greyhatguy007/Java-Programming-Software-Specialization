function chaprightyellow(x, y, r, g, b, image) {
    var img = new SimpleImage(image);
    for (var pixel of img.values()) {
        if ((pixel.getX() > img.getWidth() - x) && (pixel.getY() < y)) {
            pixel.setRed(r);
            pixel.setGreen(g)
            pixel.setBlue(b);
        }
    }
    print(img);
}

chaprightyellow(30, 60, 255, 255, 0, "chapel.png");