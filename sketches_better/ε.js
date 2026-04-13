s0.initVideo("https://raw.githubusercontent.com/alexyuwen/hydra/cdf689604bf6e3065e93f39c0a2a30cf52a84a98/media/elmo.mp4")

speed = 1
fps = 60

// Schedule. Schedules values according to durations.  Pairs is [(val, dur)]
function schedule(...pairs) {
  let nextTime = -1
  let result = -1
  let i = 0

  return () => {
    if (time > nextTime) {
      const [val, dur] = pairs[i]
      result = val
      nextTime = time + dur
      i = (i + 1) % pairs.length
    }

    return result
  }
}

// ScheduleRandValsRandDurs.  Pairs must be [[[val0, val1], [dur0, dur1]]] where val0 < val1 and dur0 < dur1
function scheduleRandValsRandDurs(...pairs) {
  let nextTime = -1
  let result = -1
  let i = 0

  return () => {
    if (time > nextTime) {
      const [vals, durs] = pairs[i]
      const valRange = vals[1] - vals[0]
      const durRange = durs[1] - durs[0]

      result = vals[0] + Math.random() * valRange
      nextTime = time + durs[0] + Math.random() * durRange
      i = (i + 1) % pairs.length
    }

    return result
  }
}

// ScheduleRandDurs.  Pairs must be [[val, [dur0, dur1]]] where dur0 < dur1
function scheduleRandDurs(...pairs) {
  let nextTime = -1
  let result = -1
  let i = 0

  return () => {
    if (time > nextTime) {
      const [val, durs] = pairs[i]
      const durRange = durs[1] - durs[0]

      result = val
      nextTime = time + durs[0] + Math.random() * durRange
      i = (i + 1) % pairs.length
    }

    return result
  }
}

const updateFps1Pairs = [
  [[1, 4], [1, 1.6]]
]
const updateFps1 = scheduleRandValsRandDurs(...updateFps1Pairs)

const updateFps2Pairs = [
  [60, 1]
]
const updateFps2 = schedule(...updateFps2Pairs)



const updateFpsPairs = [
  [updateFps2, [4, 24]],
  [updateFps1, [2, 7.2]]
]
const updateFps = scheduleRandDurs(...updateFpsPairs)

update = () => {
  fps = updateFps()()
}

let shapeScaleX = () => window.innerHeight / window.innerWidth

src(o1)
	.scale([1.02, 1.02, 1.03, 1.02, 1.012].smooth())
	.rotate([-0.04, -0.02, -0.01, -0.02, -0.04, -0.02].smooth())
	.blend(src(s0)
        .hue(() => Math.sin(time / 16) ** 10)
		.rotate(0, [0.1, 0.5, 0.2].fast(0.4))
		.saturate([2, 4, 10, 100, 10, 4, 2].smooth())
		.mask(shape(4, 0.12, 0).scale(1, shapeScaleX)
			.rotate(0, [0.1, 1, 0.1, 4, 16, 4, 1].fast(0.5)
				.smooth())), [0.01, 0.01, 0.01, 0.005, 0.005, 0, 0.005, 0.005, 0.01, 0.01, 0.01])
	.out(o1)

let offsetX = [1, 1, 0, 0.5, 0, 0, 1, 0.5].fast(0.2).ease("easeInOutQuad")
let offsetY = [1, 1, 0, 0.5, 0, 0, 1, 0.5].fast(0.1).ease("easeInOutQuad")

src(o1)
	.scale(1.5, 1, 1, offsetX, offsetY)
	.out(o0)

render(o0)



