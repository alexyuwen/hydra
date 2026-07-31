
scaleVal = 1
noiseOffsetVal = 2
noiseVal = 99
modulateAmountVal = 99

modulateImg = () => noise(noiseVal, noiseOffsetVal).color(1, 0, 0)
finalImg = () => shape(1, 0, 0.003).rotate(-Math.PI / 2).modulateHue(modulateImg(), modulateAmountVal).scale(scaleVal)
finalImg().out()