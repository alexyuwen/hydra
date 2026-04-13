noiseVal = 99
noiseOffsetVal = 2
scaleVal = 1
modulateAmountVal = 99

nextTime = time
update = () => {
  if (time >= nextTime) {
    let randVal = Math.random()
    let duration = 3.9 + Math.random()

    if (randVal < 4/15) {
      scaleVal = 8
      noiseOffsetVal = 0.2
      noiseVal = 4
      modulateAmountVal = 200
    } else if (randVal < 6/15) {
      scaleVal = 8
      noiseOffsetVal = 1
      noiseVal = 12
      modulateAmountVal = 40
    } else {
      scaleVal = 1
      noiseOffsetVal = 2
      noiseVal = 99
      modulateAmountVal = 99
    }

  	nextTime = time + duration
  }
}

modulateImg = () => noise(() => noiseVal, () => noiseOffsetVal).color(1, 0, 0)
finalImg = () => shape(1, 0, 0.003).rotate(-Math.PI / 2).modulateHue(modulateImg(), () => modulateAmountVal).scale(() => scaleVal)
finalImg().out()