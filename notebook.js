// NOTEBOOK

var result, result2;

// Rotate.
// result = osc(50, 0.05, 1).rotate(Math.PI / 4)
// result = osc(50, 0.05, 1).rotate(0, 0.1)

// Scale.
// result = shape().scale(2.5)

// Pixelate.
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
// Invert 0.5 results in a gray screen.
// result = shape().invert()
// result = gradient().invert()

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
// Bright areas of the mask image become opaque, revealing the visual layer underneath.
// Dark areas of the mask image become transparent, hiding the layer below.
// Colors come only from base source, specifically g and a little bit of r but none from b (I think).
// result = osc(60, 0, 1)
// result2 = osc(26, 0.1, 0)
// result.mask(result2)

// Modulate.
// Modulates according to the modulator's red and green values.  Red values affect horizontal, green values affect vertical.
// The actual colors of the modulator do not appear.
// The sign of the modulation amount affects modulation direction.  Postive for left and up, negative for right and down.
// result = shape(4)
// result2 = noise().color(1, 0, 0)
// result.modulate(result2)

// ModulateRepeat.  Same as calling repeat, then modulate.

// ModulateKaleid.  Applies kaleid to base source, but also applies some more advanced kaleid inside modulating source.

// ModulateScrollX.  Offsets base source according to modulating source.  Optionally scroll base source as well.
// result = osc(60, 0.)
// 	.thresh(0.5, 0)
// 	.modulateScrollX(shape(3, 0.4, 0), 0.01, 0.01)

// ModulateScale.  Scales base source according to modulating source.  Optionally scale base source as well.
// result = osc(60, 0.)
// 	.thresh(0.5, 0)
// 	.modulateScale(shape(3, 0.4, 0), 0.1, 1)

// ModulatePixelate.  Seems to pixelate base source by "offset", then apply an additional pixelation "multiple" onto modulating source.
// result = osc(100, 0.01)
// 	.thresh(0.5, 0)
// 	.modulatePixelate(shape(3, 0.4, 0), 20, 6)

// ModulateRotate.  Modulates according to modulator's red values.
// Positive modulation amount is clockwise; negative is counterclockwise.
// result = shape(4)
// result2 = osc(5, 0.1)
// result.modulateRotate(result2, 0.5)

// ModulateHue.  Warps horizontally based on difference between r and g, and vertically based on difference betwee