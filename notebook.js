// Rotate.

// Scale.

// Pixelate.  Does not average colors in bin, but instead takes the color at the center of bin.

// RepeatX.

// RepeatY.

// Kaleid.

// ScrollX.

// ScrollY.

// Posterize.  Put colors into bins.
// result = gradient().posterize()

// Invert.  Inverts color.
// Invert amount of 1 replaces r with 1 - r, and same for g and b.
// Invert amount of 0.5 results in a gray screen: r = g = b = 0.5.

// Contrast.  Exaggerates light and dark.
// Contrast=1 does nothing.
// RGB′ = amount * (RGB − 0.5) + 0.5

// Brightness.

// Luma.  Filters by luminance.
// Non-bright colors become transparent, which may appear black to due Hydra's default background.
// Bright colors remain unchanged.

// Similar to luma are the functions r(), g(), and b().  R() replaces g, b, and a with the r value.
// Threshold argument accepted, but 1 is the default, not 0.5.

// Thresh.  Turns all color into black and white, depending on threshold.

// Color.  RGBA.

// Saturate.  Exaggerates color.
// Amount=1 does nothing.  Amount>1 seems to push rgb values toward either 1 or 0.  Amount<0 seems to push rgb values toward 0.5.
// Amount<-1 seems to push high rgb values to 0 and low ones to 1.

// Hue.
// Hue greater than 1 or less than 0 just wraps around.  1.1 = 0.1 = -0.9

// Colorama.
// result = osc(50, 0.05, 1).colorama()

// Add.

// Sub.  Seems broken.

// Layer.  The source being layered needs luma in order to add transparency.

// Blend.  Essentially, cross-fading.

// Mult.

// Diff. Calculates absolute difference between color values, for each color channel.

// Mask.  Uses the brightness of the mask source to control the transparency of the base source.
// Bright areas of the mask image make the source image opaque, so you see the source image.
// Dark areas of the mask image make the source image transparent, so you see through the source image (always to the default black screen?).
// Areas that are not too bright or too dark make the source image semi-transparent.
// Colors come only from base source, specifically g and a little bit of r but none from b (I think).

// Modulate.  Red values affect horizontal.  Green values affect vertical.
// The actual colors of the modulator do not appear.
// The sign of the modulation amount affects modulation direction.  Postive for left and up, negative for right and down.

// ModulateRepeatX.  Only red channel affects modulation.
// Reps is number of horizontal repeats before modulation is applied.
// Offset is *vertical* warp/modulation amount, upward.

// ModulateRepeatY.  Only red channel affects modulation.
// Reps is number of vertical repeats before modulation is applied.
// Offset is *horizontal* warp/modulation amount, to the left.

// ModulateKaleid.  Only red channel affects modulation.
// Applies kaleid() to base image, then applies some additional kaleid magic where the modulating image's red channel is non zero.
// The more red, the more kaleid.

// ModulateScrollX.  Only red channel affects modulation.
// ScrollX argument is the scroll/modulation amount to the left.  The less red, the less scroll/modulation.

// ModulateScale.  Red channel controls horizontal scaling.  Green channel controls vertical scaling.
// Multiple argument is how sensitive modulation is to the red and green channels.
// Offset argument scales base image (and modulated parts, since they derive from base image).

// ModulatePixelate.  Red channel controls pixelation along the x-axis.  Green channel controls pixelation along the y-axis.
// I'm not sure how.
// Multiple argument *adds* additional pixelation to the pixelation specified by "offset".
// Offset argument pixelates base image (and modulated parts, since they derive from base image).

// ModulateRotate.  Only red channel affects modulation.
// Multiple argument is how sensitive modulation is to the red channel.  Positive is clockwise, negative is counterclockwise.
// Offset argument rotates base image (and modulated parts, since they derive from base image).

// ModulateHue.  Warps horizontally based on difference between r and g, and vertically based on difference between g and b.
// Broken.



////////////////////
////////////////////
////////////////////
////////////////////
////////////////////

// Imgb for images.
// Wikimedia for video.
// Or perhaps github for both?


// The raw link format is required:
// https://raw.githubusercontent.com/alexyuwen/hydra/27258965302351d45ca692d22eb603e1c8641b95/elmo.mp4
s0.initVideo("https://raw.githubusercontent.com/alexyuwen/hydra/27258965302351d45ca692d22eb603e1c8641b95/elmo.mp4")
src(s0).out()



