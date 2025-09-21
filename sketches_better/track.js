let y = noise(0.11, 0.09)
let x = osc(55, 0)
	.rotate(Math.PI / 2)
	.modulateRotate(y, 4)
	.thresh(0.992, 0.01)
	.color(1, 0.1, 0.1)
	.rotate(0, 0.25)
x.out()



osc(10, [0.06, 0.1, 0.08, 0.12].fast(0.33))
	.thresh(0.99995, 0)
	.color(1, 0.1, 0.1)
	.mask(x.thresh(0.2))
	.out()