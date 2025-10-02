// Using modulateRotate:
gradient().g().repeatY(2).modulateRotate(shape(1, 0, 0), Math.PI).out()

// Another solution:
let layer1 = gradient().g().repeatY(2).add(shape(1, 0, 0))
let layer2 = gradient().g().invert().repeatY(2).mask(shape(1, 0, 0))
layer1.layer(layer2).out()





// This also works:
gradient().diff(gradient().invert()).g().scrollY(0.5).out()



// So does this:
let layer1 = gradient().g().repeatY(2).mask(shape(1, 0, 0).invert())
let layer2 = gradient().g().repeatY(2).mask(shape(1, 0, 0).invert()).rotate(Math.PI)
layer1.diff(layer2).out()





// Quadruple gradient
let v = gradient().g().repeatY(2).modulateRotate(shape(1, 0, 0), Math.PI)
let h = gradient().r().repeatX(2).modulateRotate(shape(1, 0, 0).rotate(-Math.PI/2), Math.PI)
v.mult(h, 1).out()