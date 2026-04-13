let blendImg = noise(5, 0.2).add(solid(0.5,0.5,0.5)).saturate(2).mask(osc())

src(o0).scrollY(0.001).scrollX(0.0005).blend(blendImg, 0.01).out()