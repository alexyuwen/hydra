// Why is it bending?  I don't think ModulatePixelate (amount > 1) changes position, only pixelation amount.
let x = gradient().diff(gradient().invert()).g().scrollY(0.5).color(1, 1, 0)
osc(20, 0).modulatePixelate(x, 1, 4).out()





