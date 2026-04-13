// ScheduleRandDurs.  Pairs must be [[val, [dur0, dur1]]] where dur0 < dur1
function scheduleRandDurs(...pairs) {
  let nextTime = -1
  let result = -1
  let i = -1

  return () => {
    if (time > nextTime) {
      i = (i + 1) % pairs.length

      const [val, durs] = pairs[i]
      const durRange = durs[1] - durs[0]

      result = val
      nextTime = time + durs[0] + Math.random() * durRange
    }

    return result
  }
}

let pairs = [
  [0.1, [1, 1.1]],
  [1, [2, 2.2]]
]
let oscSpeed = scheduleRandDurs(...pairs)

osc(30, oscSpeed, 1).out()




