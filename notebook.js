// NOTEBOOK

var result, result2;

// Rotate.
// result = osc(50, 0.05, 1).rotate(Math.PI / 4)
// result = osc(50, 0.05, 1).rotate(0, 0.1)

// Scale.
// result = shape().scale(2.5)

// Pixelate.  Does not average colors in bin, but instead takes the color at the center of bin.
// result = osc(60, 0.1).pixelate(4, 1)

// RepeatX.
// result = shape().repeatX(3, 0.2)

// RepeatY.
// result = shape(4).repeatY(3, 0.2)

// Kaleid.
// result = gradient(1).kaleid()

// ScrollX.
// result = shape(3, 0.01).scrollX(0, 0.5)

// ScrollY.
// result = shape(3, 0.01).scrollY(0, 0.5)


// Posterize.  Put colors into bins.
// result = gradient().posterize()

// Invert.  Inverts color.
// Invert amount of 1 replaces r with 1 - r, and same for g and b.
// Invert amount of 0.5 results in a gray screen: r = g = b = 0.5.

// Contrast.  Exaggerates light and dark.  Contrast=1 does nothing.
// result = osc(30, 0, 0.5).contrast(2)

// Brightness.
// result = osc(50, 0, 1).brightness(0.4)
// result = osc(50, 0, 1).brightness(-0.4)

// Luma.  Filters by luminance.
// Non-bright colors become transparent, which may appear black to due Hydra's default background.
// Bright colors remain unchanged.
// Similar to luma are the functions r(), g(), and b().  R() replaces g, b, and a with the r value.
// result = osc(60, 0, 2).luma(0.5)

// Thresh.  Turns all color into black and white, depending on threshold.
// result = osc(30, 0, 2).thresh()

// Color.
// result = osc(50, 0, 1).color(1, 0, 0)

// Saturate.  Exaggerates color.  Saturate=1 does nothing.
// result = gradient(0.6).saturate(10)
// result = osc(50, 0, 1).saturate(2)

// Hue.
// Hue greater than 1 or less than 0 just wraps around.  1.1 = 0.1 = -0.9
// result = gradient().hue(0.1)
// result = osc(50, 0, 1).hue(0.1)

// Colorama.
// result = osc(50, 0.05, 1).colorama()

// Add.
// result = osc(60, 0, 1)
// result2 = osc(16, 0.1, 0)
// result.add(result2, 1)

// Sub.
// result = osc(60, 0, 1)
// result2 = osc(26, 0.1)
// result.sub(result2, 0.9)

// Layer.  The source being layered needs luma in order to add transparency.
// result = solid(0, 0, 1)
// result2 = osc(60, 0).luma(0.5, 0)
// result.layer(result2)

// Blend.  Essentially, cross-fading.
// result = osc(60, 0, 1)
// result2 = osc(26, 0.1, 0)
// result.blend(result2, 0.5)

// Mult.
// result = osc(60, 0, 0)
// result2 = osc(26, 0.1, 1)
// result.mult(result2, 0.5)

// Diff. Calculates absolute difference between color values, for each color channel.
// result = osc(60, 0, 0)
// result2 = osc(26, 0.1, 1)
// result.diff(result2)

// Mask.  Uses the brightness of the mask source to control the transparency of the base source.
// Bright areas of the mask image make the source image opaque, so you see the source image.
// Dark areas of the mask image make the source image transparent, so you see through the source image (always to the default black screen?).
// Areas that are not too bright or too dark make the source image semi-transparent.
// Colors come only from base source, specifically g and a little bit of r but none from b (I think).
// result = osc(60, 0, 1)
// result2 = osc(26, 0.1, 0)
// result.mask(result2)

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
// ScrollX argument is the offset to the left where the modulating image is red.  The less red, the less offset/modulation.

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
// This is broken.



