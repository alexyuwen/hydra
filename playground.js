// ScheduleRandDurs.  Pairs must be [[val, [dur0, dur1]]] where dur0 < dur1

let x = osc()
let y = shape()
let z = gradient()

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

let pairs = [
  [x, [1, 1.1]],
  [y, [2, 2.2]],
  [z, [3, 3.2]]
]
let x = scheduleRandDurs(...pairs)

x.out() // TODO: does not work.




