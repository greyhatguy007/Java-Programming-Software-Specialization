var img = new SimpleImage(20, 20);
print(img);
for (var pixel of img.values()) {
    var newg = 255 - pixel.getGreen();
    var newr = 255 - pixel.getRed();
    pixel.setGreen(newg);
    pixel.setRed(newr);
}
print(img);