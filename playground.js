let doubledGradient = () => gradient()
	.g()
	.repeatY(2)

doubledGradient()
	.out()

// TODO - this not working.  bottom half shouldn't be changing for these two examples.
// It should be black on bottom and top, and white in middle.
gradient().g().repeatY(2)
	.layer(gradient().g().repeatY(2)
		.invert()
		.mask(shape(1, 0, 0)))
	.out()

gradient().g().repeatY(2).invert().mask(shape(1, 0, 0)).out()

