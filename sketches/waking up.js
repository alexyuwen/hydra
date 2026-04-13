let xFull = 0.6

let x = () => 5 * Math.sin(time * 2) - 4

x = [0, xFull, -1, 0].fast(1).smooth()

solid(x, x, x).out()