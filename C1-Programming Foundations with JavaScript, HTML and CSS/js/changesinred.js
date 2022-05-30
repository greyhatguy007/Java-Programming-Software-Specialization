var img = new SimpleImage(255, 255);
for (var pixel in img.values()) {
    var redval = pixel.getX();
    pixel.setRed(redval);
    pixel.setGreen(0);
    pixel.setBlue(0);
}
print(img);