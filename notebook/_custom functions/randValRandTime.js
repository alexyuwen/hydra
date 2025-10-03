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

let shapeSize = randValRandTime([0.3, 1.2])
shape(4, shapeSize, 0).out()










