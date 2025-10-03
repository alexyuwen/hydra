function randVal() {
	let nextTime = Math.ceil(time)
    let result = Math.random()

    return () => {
      if (time > nextTime) {
          result = Math.random()
          nextTime = nextTime + 1
      }
      return result
    }
}

solid(...Array(3).fill().map(x => randVal))).out()