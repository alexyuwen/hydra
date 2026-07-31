colorVal = 0.5
cycleLength = (1 / 0.44)
startTime = time
l1 = (8 - 2 / 6) * cycleLength
// l1 = 0.1
l2 = l1 + 20 * cycleLength
update = () => {
  timeElapsed = time - startTime
  if (timeElapsed < l1 - 4) {
    colorVal = 3.6
  } else if (timeElapsed < l2) {
    if (colorVal > 0.2) {
      colorVal -= 0.0016
    }
  } else {
    colorVal -= 0.001
  }
}



let blendImg = noise(5, 0.2).add(solid(() => colorVal, () => colorVal,() => colorVal)).saturate(2).mask(osc())

src(o0).scrollY(0.001).scrollX(0.0004).blend(blendImg, 0.011).out()