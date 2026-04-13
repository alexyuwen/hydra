xScale = () => innerHeight / innerWidth
totalScale = 1.1
cycleDuration = 8
periodsPerCycle = 2 * (1.25 * totalScale) // 1.25 because Instagram reel cuts off top and bottom
nextCycleTime = time + cycleDuration
// y = A * sin(Bx + C)
rangeMax = 0.45
A1 = rangeMax * 1/2
A2 = rangeMax * 1/4
A3 = rangeMax * 1/4
B1 = periodsPerCycle * (2 * Math.PI) / cycleDuration
B2 = B1 * Math.round(6 * Math.random())
B3 = B1 * Math.round(6 * Math.random())
C1 = Math.round(99 * Math.random())
C2 = Math.round(99 * Math.random())
C3 = Math.round(99 * Math.random())

update = () => {
  if (time >= nextCycleTime) {
    cycleDuration = 6 + 4 * Math.random()
    nextCycleTime = time + cycleDuration
    B1 = periodsPerCycle * (2 * Math.PI) / cycleDuration
    B2 = B1 * Math.round(6 * Math.random())
    B3 = B1 * Math.round(6 * Math.random())
    C1 = Math.round(99 * Math.random())
    C2 = Math.round(99 * Math.random())
    C3 = Math.round(99 * Math.random())
  }

  let scrollXVal = -0.5 + (nextCycleTime - time) / cycleDuration
  let sin1 = A1 * Math.sin(B1 * time + C1)
  let sin2 = A2 * Math.sin(B2 * time + C2)
  let sin3 = A3 * Math.sin(B3 * time + C3)
  let scrollYVal = sin1 + sin2 + sin3
  let circle = shape(99, 0.001, 0.1).scale(1, xScale).contrast()
  circle.scrollX(scrollXVal).scrollY(scrollYVal).scale(totalScale)
  circle.out()
}