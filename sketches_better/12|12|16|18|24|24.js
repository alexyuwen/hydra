r = window.innerHeight / window.innerWidth
pixelateVal = 12

noise(4, 0.02).thresh(0.4, 0.012).pixelate(pixelateVal, () => pixelateVal * r).modulateScale(noise(4.4, 0.03), 0.028).out()