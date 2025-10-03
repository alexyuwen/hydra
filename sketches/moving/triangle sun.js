gradient().r().rotate(Math.PI).diff(gradient().r()).repeatX(6).out()

let ADD_AMOUNTS = [0, 0.5, 1, 2, 4, 8, 16, 32, 64, 32, 16, 4, 2, 1, 0.5, 0.05].smooth()
let INVERT_AMOUNTS = [0, 1].fast(0.4).smooth()
INVERT_AMOUNTS = 0

gradient().r().rotate(Math.PI).diff(gradient().r()).add(gradient(), ADD_AMOUNTS).invert(INVERT_AMOUNTS).out()

// shape(1, 0).add(gradient()).out()