// s0.initScreen()

// intervalRange is the min and max for the random time duration.
// range is the min and max for the random result.
function randValRandTime(intervalRange = [1, 3], range = [0, 1]) {
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

let offsetXAmount1 = randValRandTime([1, 4], [0.05, 0.5])
let offsetYAmount1 = randValRandTime([1, 4], [0.1, 0.9])

let offsetXAmount2 = randValRandTime([0.05, 0.1], [0.01, 0.02])
let offsetYAmount2 = randValRandTime([0.05, 0.1], [0.01, 0.02])

// 1/12: no shakes
// 5/12: shakes in one direction
// 6/12: shakes in both directions
let offsetXAmount3 = () => Math.floor(time % 3) ? offsetXAmount2() : 0
let offsetYAmount3 = () => Math.floor(time % 4) ? offsetYAmount2() : 0

let offsetXAmount = () => offsetXAmount1() + offsetXAmount3()
let offsetYAmount = () => offsetYAmount1() + offsetYAmount3()

let x = src(s0).invert(1).scale([2, 3, 2, 4].fast(0.5), 1, 1, offsetXAmount, offsetYAmount).blend(src(s0).scrollX(0, [-5, 0.1, 0.1, 0.1, 0.1]).scrollY(0, [-5, 0, 0]), [0, 0, 0, 0, 1, 0, 0, 1].fast(0.2)).contrast([1, 1.66].fast(0.8))

x.out()