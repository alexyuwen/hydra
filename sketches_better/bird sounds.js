// Sketch 1
shapeSize1 = 1 / 21
numPixelBins1 = (1 / shapeSize1) - 1

// scrollY variables
let change1 = 0.0015
let waitTime1 = 1
let max1 = (1 - shapeSize1) / 2
let min1 = -max1
let val1 = max1 + change1
let nextTime1 = time
let waiting1 = false

// modulateScrollX variables
let modulateScrollXVal1 = 44
let modulateScrollXSrc1 = noise(() => modulateScrollXVal1, 0)
.pixelate(1, numPixelBins1)
let modulateScrollXAmount1 = 0.25

update1 = () => {
if (waiting1) {
if (time >= nextTime1) {
waiting1 = false
val1 = max1
modulateScrollXVal1 = 44 + 44 * Math.random()
}
} else {
val1 -= change1
if (val1 <= min1) {
val1 = min1
waiting1 = true
nextTime1 = time + waitTime1
}
}
}


maskFunc1 = () => osc(35, 0)
.rotate(Math.PI / 2)
layerDownFunc1 = () => shape(4, shapeSize1, 0.004)
.scrollY(() => val1)
.modulateScrollX(modulateScrollXSrc1, modulateScrollXAmount1)
.mask(maskFunc1())

src(o0)
.layer(layerDownFunc1())
.out(o0)







// Sketch 2

shapeSize2 = 1 / 42
numPixelBins2 = (2 / shapeSize2) - 1

// scrollY variables
let change2 = 0.0024
let max2 = (1 - shapeSize2) / 2
let min2 = -max2
let val2 = max2 + change2

// modulateScrollX variables
let modulateScrollXVal2 = 44
let modulateScrollXSrc2 = noise(() => modulateScrollXVal2, 0)
.pixelate(1, numPixelBins2)
let modulateScrollXAmount2 = 0.25

// scrollY variables
let scrollYVal2 = 0

update2 = () => {
val2 -= change2
scrollYVal2 += 0.001
}

stack = (func) => {
let final = solid()
for (i = 0; i < 2 * Math.PI; i += Math.PI / 2) {
final.add(func()
.rotate(i))
}
return final
}

layerDownFunc2 = () => shape(4, shapeSize2, 0.004)
.scale(1, 2)
.scrollY(() => val2)
.modulateScrollX(modulateScrollXSrc2, modulateScrollXAmount2)
.scrollY(() => scrollYVal2)
.scale(1, 1, 1.025)

stack(layerDownFunc2)
.out(o1)




update = () => {
update1()
update2()
}






// Render
render(o0)
render(o1)