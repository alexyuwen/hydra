// Update.  Called every frame.
fps = 60

let nextTime = -1
let result = 60

// Alternate between snapshot and continuous
function updateFps1() {
  if (time > nextTime) {
    if (fps == 60) {
      nextTime = time + 2
      result = 1
    } else {
    nextTime = time + 1
      result = 60
    }
  }
  fps = result
}

update = updateFps

osc(22, 0.1, 1).out()
