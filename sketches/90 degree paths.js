scaleX = () => innerHeight / innerWidth

delta = 0.02
xDelta = delta
yDelta = delta
scrollXVal = 99
scrollYVal = 99
goal = 0.1
deltaTotal = 0.1
xTurn = true

scrollMax = 0.45
i = 0

update = () => {
  if (Math.abs(scrollXVal) > scrollMax || Math.abs(scrollYVal) > scrollMax) {
    let randVal = -scrollMax + 2 * scrollMax * Math.random()
    switch (i) {
      case 0: // left
        scrollXVal = scrollMax
        scrollYVal = randVal
        xTurn = true
        xDelta = -delta
        break
      case 1: // top
        scrollXVal = randVal
        scrollYVal = scrollMax
        xTurn = false
        yDelta = -delta
        break
      case 2: // right
        scrollXVal = -scrollMax
        scrollYVal = randVal
        xTurn = true
        xDelta = delta
        break
      case 3: // bottom
        scrollXVal = randVal
        scrollYVal = -scrollMax
        xTurn = false
        yDelta = delta
        break
    }

    i = (i + 1) % 4
  }

  if (Math.abs(deltaTotal) >= goal) {
    xTurn = !xTurn
    deltaTotal = 0
    goal = 0.05 + 0.05 * Math.random() // TODO: Customize according to starting position for particular path patterns?
    if (xTurn) {
      goal *= scaleX()
    }
  }

  let shapeImg = shape(4, 0.04, 0).scale(1, scaleX)
  shapeImg.scrollX(scrollXVal).scrollY(scrollYVal).out()

  if (xTurn) {
    scrollXVal += xDelta
    deltaTotal += xDelta
  } else {
    scrollYVal += yDelta
    deltaTotal += yDelta
  }

}