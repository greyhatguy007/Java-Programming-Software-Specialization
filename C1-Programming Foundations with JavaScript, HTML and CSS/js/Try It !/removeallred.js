function removeallred(image) {
    var img = new SimpleImage(image);
    for (var pixel of img.values()) {
        pixel.setRed(0);
    }
    print(img);
}

removeallred("chapel.png");