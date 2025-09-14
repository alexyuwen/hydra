shape(4, 0.9, 0.001).out()

src(o0)
	.invert()
	.mask(shape(4, 0.9, 0.001))
	.scale(0.9)
	.out()