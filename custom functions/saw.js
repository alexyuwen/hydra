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

    return val
  }
}