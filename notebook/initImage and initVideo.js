// Imgb for images.
// Wikimedia for video.
// Or perhaps github for both?


// The raw link format is required:
// https://raw.githubusercontent.com/alexyuwen/hydra/<commit-id>/path-to-file.file-type
s0.initVideo("https://raw.githubusercontent.com/alexyuwen/hydra/cdf689604bf6e3065e93f39c0a2a30cf52a84a98/media/elmo.mp4")
src(s0).out()


///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// IMAGES

// Image.
s0.initImage("https://raw.githubusercontent.com/alexyuwen/hydra/cdf689604bf6e3065e93f39c0a2a30cf52a84a98/media/dyingStar.jpg")
src(s0).out()



// Scale feedback, but keep a rotating center.
src(o0).scale(1.01).layer(src(s0).rotate(0, 0.1).mask(shape(99, 0.2, 0))).out()

// Instead of rotating center, change the center image.
// "Random" value every two seconds
const x = () => Math.sin(12 * Math.floor(time / 2))
const y = () => Math.sin(123 * Math.floor(time / 2))
src(o0).scale(1.01).layer(src(s0).scroll(x, y).mask(shape(99, 0.2, 0))).out()






