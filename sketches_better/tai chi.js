// tai chi

// Run this first, then comment out.
s0.initScreen()

hueVal = () => Math.sin(time / 30)

nextTime = time
nextTime2 = time
taichiFlag = true
blendVal = 0.001
kaleidVal = () => 10 + 2 * Math.sin(time / 16)

update = () => {
  if (time >= nextTime) {
    let dur = 4 + 6 * Math.random()

    // Make the transition smooth but quick
    brightnessVal = 0.5 + 2.5 * Math.random()

    nextTime = time + dur
  }

  if (time >= nextTime2) {
    blendInProgress = true
    taichiFlag = !taichiFlag
    let dur = taichiFlag ? (12 + 24 * Math.random()) : (12 + 24 * Math.random())
    nextTime2 = time + dur
  }

  if (taichiFlag) {
    // Slide blendVal from 1 to 0
    blendVal = Math.min(blendVal, 0.99) // Start descent from 0.99
    blendVal = Math.pow(blendVal, 1.033)
  } else {
    // Slide blendVal from 0 to 1
    blendVal = Math.max(blendVal, 0.01) // Start ascent from 0.01
    blendVal = Math.min(1, Math.pow(blendVal, 0.972))// Stop ascent at 1
  }
}

taichiImg = () => src(s0).contrast(1.6).luma(0.7).invert().saturate(21).brightness(() => brightnessVal).hue(hueVal)
taichiImg().out(o1)
taichiImg().kaleid(2).kaleid(kaleidVal).out(o2)
src(o1).blend(src(o2), () => blendVal).out()

