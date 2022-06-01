function chapleftgreen(image) {
    var img = new SimpleImage(image);
    for (var pixel of img.values()) {
        if (pixel.getX() < 50 && pixel.getY() < 50) {
            pixel.setRed(0);
            pixel.setGreen(255)
            pixel.setBlue(0);
        }
    }
    print(img);
}

chapleftgreen("chapel.png");