// two-way traffic
scrollSrc = noise(9, 0.2).pixelate(1, 9)
multSrc = gradient().r().diff(gradient().r().invert()).invert().brightness(0.2)

shape(4).repeat(3, 6).modulateScrollX(scrollSrc, 3).mult(multSrc).out()