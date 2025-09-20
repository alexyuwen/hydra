
// Multiple layers with map and reduce.
[0.33, 0, -0.33]
  .map(x => shape(4, 0.7).scale(1, 0.4, 1).scrollX(x))
  .reduce((a, b) => a.layer(b.r()))
  .out()

function randColor() {
	let randOffset = 2 * Math.PI * Math.random()
	return () => Math.sin(time + randOffset)
}

[0.33, 0, -0.33]
.map(x => shape(4, 0.7)
		.scale(1, 0.4, 1)
		.scrollX(x))
	.reduce((a, b) => a.layer(b.r()
		.color(...Array(3)
			.fill(randColor()))), solid())
	.out()

// The triple-dot "spread" operator makes each argument the same function result. For a different function result for each argument:
// .color(...Array(3).fill().map(x => randColor()))