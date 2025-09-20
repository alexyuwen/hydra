function saw(duration, minVal, maxVal) {
  let startTime = -duration
  let range = maxVal - minVal

  return () => {
    let time0 = time - startTime
    if (time0 > duration) {
      startTime = time
    }
    return minVal + ((time - startTime) / duration) * range // could dip very slightly under minVal due to discrete fps
  }
}

function iSaw(duration, maxVal=1, minVal=0) {
  let startTime = -duration
  let range = maxVal - minVal

  return () => {
    let time0 = time - startTime
    if (time0 > duration) {
      startTime = time
      return maxVal
    }
    return maxVal - (time0 / duration) * range
  }
}

// Lights turning on and off takes from 5.5pi to 8.5pi seconds
function randColor() {
  let cycleTime = 3 * Math.PI * Math.random() + (10 * Math.PI) // Cycle length. Range from 10pi to 13pi
  let startTime = time - 3 * Math.PI * Math.random()
  let lightsOnTime = 3 * Math.PI * Math.random() + 3 * Math.PI // Range from 3pi to 6pi
  let skipCycle = Math.random() < 0.5
  let lightsOff = iSaw(Math.PI / 2)

  return () => {
    let time0 = time - startTime
    let timeMod = time0 % cycleTime

    if (time0 >= cycleTime) {
      cycleTime = 3 * Math.PI * Math.random() + (10 * Math.PI)
      startTime = time
      lightsOnTime = 3 * Math.PI * Math.random() + 3 * Math.PI
      skipCycle = Math.random() < 0.5
    }

    if (time0 < 0 || skipCycle) {
      return 0
    }

    if (timeMod < 2 * Math.PI + lightsOnTime + 0.5 * Math.PI) {
      if (timeMod < 2 * Math.PI) {
        // Turn lights on.  Takes 2pi
        return 2 * Math.sin((timeMod / 4) + Math.PI)
      } else if (timeMod <= 2 * Math.PI + lightsOnTime) {
        // Keep lights on.  Takes lightsOnTime, range from 3pi to 6pi
        return 1
      }
      // Turn lights off.  Takes 0.5pi
      return lightsOff()
    }

    return 0
  }
}

// Make list of size 2n + 1: [-n(step), -(n - 1)step, ..., 0, step, step + 1, ..., (n - 1)step, n(step)]
function makeList(step, n) {
  let result = []
  for (let i = -n; i <= n; i++) {
    result.push(i * step)
  }
  return result
}

let squares = []
for (let x of makeList(0.02, 4)) {
  for (let y of makeList(0.053, 9)) {
    squares.push(
      shape(4, 0.03, 0.025)
        .scale(1, 0.4, 1)
        .scrollX(x)
        .scrollY(y)
    );
  }
}


let result = squares.reduce((a, b) => a.layer(b.r()
		.color(...Array(3)
			.fill(randColor()))), solid())


result.modulateScale(gradient().g(), [200, 160, 80, 40, 10, 2, 1.2, 2, 10, 40, 80, 160].fast(1/16).smooth())

result.out()