timeWait = 1
nextTime = Math.round(time) + timeWait
addFlag = true
timeWaitMin1 = 0.3 // min when value is set
timeWaitMin2 = 0.05 // min before value is reset

update = () => {
  let shapeSize = 0.9 * Math.random() + 0.1
  let shapeImg = shape(4, shapeSize, 0.001)
  let final

  if (time >= nextTime) {
    if (timeWait < timeWaitMin2) {
      timeWait = 0.7 * Math.random() + timeWaitMin1
      timeWaitMin2 = 0.1 * Math.random() + 0.05
      final = addFlag ? src(o0).add(shapeImg) : src(o0).sub(shapeImg.color(1, 1, 1, 0))
      addFlag = !addFlag
    } else {
      timeWait *= 0.9
      final = src(o0).diff(shapeImg)
    }
    nextTime += timeWait
  } else {
    final = src(o0)
  }

  final.out()
}