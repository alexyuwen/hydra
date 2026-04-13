s0.initImage("https://raw.githubusercontent.com/alexyuwen/hydra/6fb7a35d07668ae814d3b90a22e76809441ed419/media/lightbulb.jpeg")

function y() {
    let cycleLength = 1 + Math.random()
	let nextTime = time + cycleLength
	let result = 1.1

	return () => {
		if (time > nextTime) {
			nextTime = time + cycleLength
			result = 1.1
		} else {
			result = -0.1 + 1.2 * (nextTime - time) / cycleLength
		}

		return result
	}
}

function makeLight() {
  let randX = Math.random()
  let randCycleLength = 1 + Math.random()

  console.log(randX, randCycleLength)

  return src(s0).scale(0.05).mask(shape(4, 0.05, 0)).scale(2, 1, 1, randX, y())
}

let lights = Array(6).fill().map(_ => makeLight())

let result = lights.reduce((a, b) => a.add(b))

result.modulateRotate(noise(), 0.1).out()
