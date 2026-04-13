maskImg = () => osc(50, 0, 0).thresh(0.99, 0.003).modulate(noise(8, 0.2), 0.01)

noise(1, 0.2).thresh().mask(maskImg()).out()

maskImg().out()