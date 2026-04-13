// TODO Remove the resets - it interrupts the feeling of nature.

let x = 0.32
let y = 0.4
let z = 0

let modulateRotateImgNoiseOffset = [0.05, 0.06].fast(0.3)
let modulateRotateImg = noise(1, modulateRotateImgNoiseOffset)
	.sub(solid(y, y, y, 0))

let modulateScaleImg = noise(5, 0.2)
	.sub(solid(z, z, z, 0))
let modulateScaleMultiple = [0.1, 0.1, 0.6].fast(0.5)
	.smooth(0.5)

noise(99, 0.2)
	.modulateRotate(modulateRotateImg, 0.2)
	.modulateScale(modulateScaleImg, 0)
	.sub(solid(x, x, x, 0))
	.contrast(9)
	.out()

modulateScaleImg.out(o1)

render(o0)