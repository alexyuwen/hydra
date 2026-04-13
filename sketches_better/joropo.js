

// These settings were set with Mac audio on lowest volume (1 bar)
a.setSmooth(0.3)
a.setScale(7.5)

minVal = 1
maxVal = 0

shapeSizeFunc = () => {
  let bassVol = a.fft[0]
  let min = 0.0
  let max = 0.02

  return min + bassVol * (max - min)
}

smoothnessFunc = () => {
  let trebleVol = a.fft[3]
  let min = 0
  let max = 0.08

  return min + (trebleVol ** 3) * (max - min)
}

scaleFunc = () => {
  let midVol = a.fft[2]
  let min = 44
  let max = 144

  return min + (midVol) * (max - min)
}

contrastFunc = [1.0001, 1.0001, 1, 1.0001, 1.0001, 1.0001, 1].fast(1.5)

shapeSrc = shape(4, shapeSizeFunc, smoothnessFunc).scale(1, scaleFunc).rotate(0, 0.8)

src(o0).brightness(-0.002).contrast(contrastFunc).add(shapeSrc, 0.16).out()




