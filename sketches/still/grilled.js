// Run this first
osc(40, 0.1)
	.thresh()
	.out()

// Then alternate between these two:
// Start
src(o0)
	.rotate(0, 1)
	.out()

// Stop
src(o0)
	.rotate(0, 0)
	.out()