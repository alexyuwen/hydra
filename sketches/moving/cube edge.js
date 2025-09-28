let x = gradient().diff(gradient().invert()).g().scrollY(0.5)

osc().modulateScale(x, 6).thresh().out()