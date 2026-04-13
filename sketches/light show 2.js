
let maskImg = osc(5, 0.1, 0).mask(shape(99, 0.2, 0))
let center = voronoi(1, 0.3, 0).contrast().mask(maskImg)

// center = osc(50, 0.1, 1).mask(shape(99, 0.2, 0))

maskImg.out(o2)
src(o0).scale([1.01, 1.01, 1.01, 1.025].fast(0.2).ease("easeInQuint")).rotate(0.005).blend(center, 0.01).out(o0)

render(o0)