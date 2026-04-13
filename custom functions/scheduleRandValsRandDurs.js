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

let pairs = [
  [[0.1, 0.2], [1, 1.1]],
  [[0.5, 1], [2, 2.2]]
]
let oscSpeed = scheduleRandValsRandDurs(...pairs)

osc(30, oscSpeed, 1).out()


