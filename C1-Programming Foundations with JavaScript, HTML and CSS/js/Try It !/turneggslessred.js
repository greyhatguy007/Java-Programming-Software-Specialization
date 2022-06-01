function turnlessred(image) {
    var img = new SimpleImage(image);
    for (var pixel of img.values()) {
        if (pixel.getRed() > 70) {
            pixel.setRed(70);
        }
    }
    print(img);
}

turnlessred("eastereggs.jpg");