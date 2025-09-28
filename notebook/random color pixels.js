const PIXELS_X = 100;
const PIXELS_Y = 60;
const NOISE_SCALE = 3000;  // Changing this generates a new "random" noise

const r = noise(NOISE_SCALE, 0).pixelate(PIXELS_X, PIXELS_Y).color(1, 0, 0)
const g = noise(NOISE_SCALE + 1, 0).pixelate(PIXELS_X, PIXELS_Y).color(0, 1, 0)
const b = noise(NOISE_SCALE + 2, 0).pixelate(PIXELS_X, PIXELS_Y).color(0, 0, 1)

r.add(g).add(b).out(o0);