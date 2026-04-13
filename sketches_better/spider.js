// spider

shapeColor = 0.07
scaleX = () => innerHeight / innerWidth
scrollXVal = -0.01
scrollXChange = 0.005
decelerationRate = 0.95
shapeRotate = 0
canvasRotate = 0
canvasRotateTotal = 0
scrollYVal = 0
noiseBlendVal = 0.4
nextRotateTime = time + 3
nextBlackoutTime = time
blackoutDur = 0.01

update = () => {
  if (scrollXChange < 0.0001) {
    scrollXVal = -0.012
    scrollXChange = 0.005 + 0.0024 * Math.random()
    decelerationRate = 0.945 + 0.03 * Math.random()
    shapeRotate = 2 * Math.PI * Math.random()
    scrollYVal = -0.01 + 0.02 * Math.random()
  } else {
    scrollXVal += scrollXChange
  }

  scrollXChange *= decelerationRate

  shapeImg = shape(99, 0.01, 0.02).color(shapeColor, shapeColor, shapeColor).scrollX(() => scrollXVal).scrollY(() => scrollYVal).rotate(() => shapeRotate) // on this Mac but not on the library computer, the arguments need to be functions or else the sketch slows down over time
  src(o2).add(shapeImg).out(o2)

  if (time >= nextRotateTime) {
    nextRotateTime = time + 0.5 + 11 * Math.pow(Math.random(), 3.6)
    canvasRotateTotal += 3 * Math.PI * Math.random()

    let eraserImg = makeEraser(2 * Math.PI * Math.random())
    src(o2).mask(eraserImg).out(o2)

    noiseBlendVal = 0.4 + 0.05 * Math.random()
  }

  if (canvasRotate < canvasRotateTotal) {
    canvasRotate += 1
  }

  spiderImg = src(o2).rotate(canvasRotate).scale(2, scaleX) // scale must come after rotate to avoid distortion

  if (time >= nextBlackoutTime) {
    solid().out(o0)
    if (time >= nextBlackoutTime + blackoutDur) {
      nextBlackoutTime += 0.5 + 9 * Math.pow(Math.random(), 2)
    }
  } else {
    src(o1).add(spiderImg, 2).invert().out(o0)
  }
}

makeEraser = rotateAmount => {
  let makeShape = () => shape(99, 0.01, 0.05).scale(1, 99).mask(shape(1, -0.1, 0.1).rotate(Math.PI / 2))

  let shapes = makeShape()
  shapes.add(makeShape().rotate(Math.PI))
  shapes.add(makeShape().rotate(Math.PI / 2))
  shapes.add(makeShape().rotate(3 * Math.PI / 2))

  return shapes.rotate(rotateAmount).invert()
}

makeNoise = () => noise(150, 0.1).modulateScale(noise(222, 1), 0.1).modulateScale(noise(9, 0.2), 0.1).rotate(0, -0.01).mask(noise(12, 0.12)).brightness(-0.7).blend(solid(1, 1, 1), () => noiseBlendVal)

noiseImg = makeNoise().out(o1)

fps = 90