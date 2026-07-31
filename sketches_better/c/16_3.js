// s0.initScreen()

r = window.innerHeight / window.innerWidth
posterizeVal = 1

cycleLength = 1 / 0.44
cycles = 80
startTime = time
endTime = time + cycles * cycleLength

update = () => {
  progress = (time - startTime) / (endTime - startTime)
  posterizeVal = progress < 0.6 ? 1 : 1.01
}

danceImg = src(s0).posterize(() => posterizeVal)
danceImg.out()