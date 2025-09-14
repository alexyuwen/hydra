s0.initCam()

let windowRescale = () => window.innerWidth / window.innerHeight
let shapeRadius = 0.2
let scrollXMax = 0.5 - 0.5 * shapeRadius
let scrollYMax = 0.5 - 0.5 * (shapeRadius * windowRescale())

function rand(intervalRange = [1, 3], range = [0, 1]) {
	let result = 0
    let interval;
    let nextTime = time

	return () => {
		if (time >= nextTime) {
			result = range[0] + Math.random() * (range[1] - range[0])
			interval = intervalRange[0] + Math.random() * (intervalRange[1] - intervalRange[0])
			nextTime = time + interval
		}
		return result
	}
}

let scrollXRand = rand([0.7, 2.0], [-scrollXMax, scrollXMax])
let scrollYRand = rand([0.5, 1.5], [-scrollYMax, scrollYMax])
let threshRand = rand([1, 1], [0.3, 0.8])



let result = src(s0)
	.rotate(Math.PI / 2)
	.scale(1, 1, windowRescale)
	.thresh(threshRand, 0.00)
	.scrollX(0, 0.002)

let maskSource = shape(4, shapeRadius, 0.0)
	.scale(1, 1, windowRescale)
	.scrollX(scrollXRand)
 	.scrollY(scrollYRand)

result.mask(maskSource)

result.out()