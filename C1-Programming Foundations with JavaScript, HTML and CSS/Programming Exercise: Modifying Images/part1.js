image = new SimpleImage("hilton.jpg");
w = image.getWidth();
for (var pixel of image.values()) {
    x = pixel.getX();
    if (x < w / 3) {
        pixel.setRed(255);
    }
    if (x >= w / 3 && x < 2 * w / 3) {
        pixel.setGreen(255);
    }
    if (x >= 2 * w / 3 && x <= w) {
        pixel.setBlue(255);
    }
}
print(image);