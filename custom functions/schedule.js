// Note: Nesting schedule functions is not like switching between different "fast x" in Tidal.  Each inner function starts from the beginning.



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

let pairs = [
  [0, 0.5],
  [0.2, 1]
]
let oscSpeed = schedule(...pairs)

osc(30, oscSpeed, 1).out()

