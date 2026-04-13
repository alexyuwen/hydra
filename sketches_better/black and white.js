// black and white

scaleX = () => innerHeight / innerWidth

randVal = (changeLimit, scrollLimit) => {
  let val = 0
  return () => {
    let change = 2 * changeLimit * Math.random() - changeLimit
    let newVal = val + change
    if (newVal < -scrollLimit) {
      val = newVal + 2 * Math.abs(change)
    } else if (newVal > scrollLimit) {
      val = newVal - 2 * Math.abs(change)
    } else {
      val = newVal
    }
    return val
  }
}

makeCircle = () => shape(99, 0.01, 0.4).scale(1, scaleX).scrollX(randVal(0.07, 0.4)).scrollY(randVal(0.075, 0.36))

circle1 = makeCircle()
circle2 = makeCircle()

addVal = 0.18
addFast = 0.25

solid().add(src(o0).add(circle1, [addVal, -addVal].fast(addFast)).add(circle2, [-addVal, addVal].fast(0.88 * addFast))).out() // One circle, alternating between white and black




