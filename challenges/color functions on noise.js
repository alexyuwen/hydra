// Not quite there.  Get rid of the ugly center cross.
noise(5).pixelate(35, 20).out()
src(o0).scale(1.01).blend(noise(5).pixelate(35, 20).add(gradient().rotate(0.004, 0)), 0.01).out()