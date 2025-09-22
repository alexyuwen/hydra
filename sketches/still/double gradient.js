let layer2 = gradient().g().invert().repeatY(2).mask(shape(1, 0, 0))

gradient().g().repeatY(2).add(shape(1, 0, 0)).layer(layer2).out()