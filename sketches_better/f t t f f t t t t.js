// barcode

nextTime = time + (5/8)
pixelateVal = 999
brightnessVal = 0
contrastVal = 1

update = () => {
  if (time >= nextTime) {
    nextTime = time + ((Math.random() > 0.5) ? (5/8) : (3/8))
    pixelateVal = 900 + 900 * Math.random()
    brightnessVal = 0.2 * Math.random()
    contrastVal = 1 + Math.random()
  }
}

noise(999, 0).brightness(() => brightnessVal).pixelate(() => pixelateVal, 1).contrast(() => contrastVal).out()