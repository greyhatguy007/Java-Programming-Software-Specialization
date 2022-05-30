function makeitred(image) {
    var img = new SimpleImage(image);
    for (var pixel of img.values()) {
        pixel.setRed(255);
    }
    print(img);
}

makeitred("chapel.png");