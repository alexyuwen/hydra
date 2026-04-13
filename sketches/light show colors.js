function randVal() {
	let nextTime = Math.ceil(time)
    let result = Math.random()

    return () => {
      if (time > nextTime) {
        nextTime += 1.2
        result = Math.random()
      }

      return result
    }
}

let center = solid(...Array(3).fill().map(x => randVal())).mask(shape(4, 0.01, 1)).saturate(3)

src(o0).scale(1.003).blend(center, 0.01).out()