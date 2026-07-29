colorVal = 0.5
cycleLength = (1 / 0.44)
startTime = time
l1 = (8 - 2 / 6) * cycleLength
// l1 = 0.1
l2 = l1 + 8
l3 = 52 * cycleLength
update = () => {
  timeElapsed = time - startTime
  if (timeElapsed < l1 - 1.2) {
    colorVal = 3.6
  } else if (timeElapsed < l2) {
    if (colorVal > 0.2) {
      colorVal -= 0.004
    }
  } else if (timeElapsed < l3) {
   	colorVal += 0.03 - 0.06 * Math.random()
    colorVal = Math.max(colorVal, 0.1)
    colorVal = Math.min(colorVal, 1)
  } else {
    colorVal -= 0.001
  }
}



let blendImg = noise(5, 0.2).add(solid(0.5, 0.5, 0.5)).saturate(2).mask(osc())

src(o0).scrollY(0.001).scrollX(0.0004).blend(blendImg, 0.01).out()