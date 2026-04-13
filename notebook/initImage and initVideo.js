// Imgb for images.
// Wikimedia for video.
// Or, Github for both.


// Raw link format is required:
// https://raw.githubusercontent.com/alexyuwen/hydra/<commit-id>/path-to-file.file-type
// Go to media in github, click three dots, click "Copy permalink"

s0.initVideo("https://raw.githubusercontent.com/alexyuwen/hydra/f2cc9338f38b718523162144f9022f889f6ca669/media/butt.MP4")
s0.initVideo("https://raw.githubusercontent.com/alexyuwen/hydra/cdf689604bf6e3065e93f39c0a2a30cf52a84a98/media/elmo.mp4")


scaleYVal = () => innerWidth / innerHeight
src(s0).scale(1, 1, scaleYVal).out()


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
s0.initImage("https://raw.githubusercontent.com/alexyuwen/hydra/f2cc9338f38b718523162144f9022f889f6ca669/media/dyingStar.jpg")
s0.initImage("https://raw.githubusercontent.com/alexyuwen/hydra/6fb7a35d07668ae814d3b90a22e76809441ed419/media/lightbulb.jpeg")

src(s0).out()



// Scale feedback, but keep a rotating center.
src(o0).scale(1.01).layer(src(s0).rotate(0, 0.1).mask(shape(99, 0.2, 0))).out()

// Instead of rotating center, change the center image.
// "Random" value every two seconds
const x = () => Math.sin(12 * Math.floor(time / 2))
const y = () => Math.sin(123 * Math.floor(time / 2))
src(o0).scale(1.01).layer(src(s0).scroll(x, y).mask(shape(99, 0.2, 0))).out()






