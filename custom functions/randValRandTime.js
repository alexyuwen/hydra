// durRange is the min and max for the random time duration.
// range is the min and max for the random result.
function randValRandTime(durRange = [1, 3], valRange = [0, 1]) {
  let val = 0
  let dur;
  let nextTime = time

	return () => {
		if (time >= nextTime) {
			val = valRange[0] + Math.random() * (valRange[1] - valRange[0])
			dur = durRange[0] + Math.random() * (durRange[1] - durRange[0])
			nextTime = time + dur
		}
    
		return val
	}
}

let shapeSize = randValRandTime([0.3, 1.2])
shape(4, shapeSize, 0).out()










