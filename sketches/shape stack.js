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



// Saw.  Saw wave going from 0 to 1 over t seconds.
function saw(t) {
  let nextTime = time + t
  let val = 0

  return () => {
    if (time >= nextTime) {
      nextTime += t
      val = 0
    } else {
      val = (t - (nextTime - time)) / t
    }

    console.log(val)

    return val
  }
}


let t = 1.8

let offsetX = randValRandTime([t, t], [0, 1])
let offsetY = randValRandTime([t, t], [0, 1])

let x = saw(t)



shape(3, 0.1, 0.003).scale(2, 1, 1, offsetX, offsetY).color(x, x, x).out(o1)

src(o0).add(src(o1), 0.1).out(o0) // add amount must be small because it the add happens every frame due to feedback

