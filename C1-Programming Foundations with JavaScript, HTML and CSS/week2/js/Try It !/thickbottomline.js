function thickbottomline(image) {
    var img = new SimpleImage(image);
    var h = img.getHeight();
    for (var pixel of img.values()) {
        if (pixel.getX < (h - 10)) {
            pixel.setRed(0);
            pixel.setGreen(0);
            pixel.setBlue(0);
        }
    }
    print(img);
}

thickbottomline("astrachan.jpg");