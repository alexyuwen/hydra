let diag = shape(4, 0.09, 0).scale(1, 999).scrollY(0.045).rotate(Math.PI / 4)
osc(50, 0).thresh(0.99, 0).add(osc(50, 0).thresh(0.99, 0).rotate(Math.PI / 2)).mask(diag).out()