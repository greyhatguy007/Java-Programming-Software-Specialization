function changebtoy(image) {
    var img = new SimpleImage(image)
    for (var pixel in img.values()) {
        if (pixel.getRed() == 0) {
            pixel.setRed(255);
            pixel.setGreen(255);
        }
    }
    print(img);
}

changebtoy("duke_blue_devil.png");