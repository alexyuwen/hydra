/*
GENERAL NOTES

Once you write to a buffer (o0, o1, o2, o3), values are trimmed. Anything lower than 0 becomes 0, and anything greater than 1 becomes 1.



*/

// Rotate.

// Scale.

// Pixelate.  Does not average colors in bin, but instead takes the color at the center of bin.

// RepeatX.

// RepeatY.

// Kaleid.

// ScrollX.

// ScrollY.

// Posterize.  Thresh but for each channel.
// Bins=3 makes each RGB channel 0, 0.5, or 1, resulting in 3x3x3 = 27 total color combinations.
// Gamma argument adjusts the distribution of brightness levels among the bins.
// Gamma > 1 increase brightness of midtones; Gamma < 1 darkens them.

// Shift.  Shifts RGB channels.
// Adds offset to RGB channels individually.

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

// Thresh.  Turns all color into black and white, depending on brightness threshold.

// Color.  RGBA.

// Saturate.  Exaggerates color.
// Amount=1 does nothing.  Amount>1 seems to push rgb values toward either 1 or 0.  Amount<0 seems to push rgb values toward 0.5.
// Amount<-1 seems to push high rgb values to 0 and low ones to 1.

// Hue.
// Hue greater than 1 or less than 0 just wraps around.  1.1 = 0.1 = -0.9

// Colorama.
// result = osc(50, 0.05, 1).colorama()

// Add.
// Does more than simply adding RGB values.  For example: noise().add(solid(1,1,1), 2) will produce white screen only with amount of 2.
// Combine with mask to add only part of an image.

// Sub.

// Layer.  Adds second layer on top.  The amount depends on the brightness of the second layer, proportionally.
// The source being layered needs luma or mask in order to add transparency.

// Blend.  Essentially, cross-fading.

// Mult.

// Diff. Calculates absolute difference between color values, for each color channel.
// Works for all numbers: negative, positive, greater than 1, lower than -1
// Inverts base image color where second image is white.

// Mask.  Uses the brightness of the mask source to control the transparency of the base source.
// Bright areas of the mask image make the source image opaque, so you see the source image.
// Dark areas of the mask image make the source image transparent, so you see through the source image (always to the default black screen?).
// Areas that are not too bright or too dark make the source image semi-transparent.
// Colors come only from base source, specifically g and a little bit of r but none from b (I think).

// Modulate.  Red values affect horizontal.  Green values affect vertical.  The actual colors of the modulator do not appear.
// Positive modulation amount means that modulated sections will take what's to the right and down.
// Negative modulation amount means that modulated sections will take what's to the left and up.

// ModulateRepeatX.  Repeats, then uses just the red channel of modulating image to warp upwards.
// Reps is number of horizontal repeats before modulation is applied.
// Offset is *vertical* warp/modulation amount.

// ModulateRepeatY.  Repeats, then uses just the red channel of modulating image to warp to the left.
// Reps is number of vertical repeats before modulation is applied.
// Offset is *horizontal* warp/modulation amount.

// ModulateKaleid.  Only red channel affects modulation.
// Applies kaleid() to base image, then applies some additional kaleid magic where the modulating image's red channel is non zero.
// The more red, the more kaleid.

// ModulateScrollX.  Only red channel affects modulation.  The less red, the less scroll/modulation.
// ScrollX argument is the fixed scroll/modulation amount.
// Just like with Modulate, positive modulation amount means modulated sections will take what's to the right.
// Negative modulation amount means modulated sections will take what's to the left.
// Speed argument is the scroll speed of everything, including the modulated portions.

// ModulateScrollY.  Only red channel affects modulation.  The less red, the less scroll/modulation.
// ScrollY argument is the fixed scroll/modulation amount.
// Just like with Modulate, positive modulation amount means modulated sections will take what's below.
// Negative modulation amount means modulated sections will take what's above.
// Speed argument is the scroll speed of everything, including the modulated portions.

// ModulateScale.  Red channel controls horizontal scaling.  Green channel controls vertical scaling.
// Multiple argument is how sensitive modulation is to the red and green channels.
// Offset argument scales base image (and modulated parts, since they derive from base image).

// ModulatePixelate.  Red channel controls pixelation along the x-axis.  Green channel controls pixelation along the y-axis.
// Multiple argument is modulation amount.  It increases pixelation, on top of the base pixelation specified by "offset".
// Offset argument pixelates base image (and modulated parts, since they derive from base image).
// TODO: How do shades affect modulation?  1,1,1 vs 0.5,0.5,0.5

// ModulateRotate.  Only red channel affects modulation.
// Multiple argument is how sensitive modulation is to the red channel.  Positive is clockwise, negative is counterclockwise.
// Offset argument rotates base image (and modulated parts, since they derive from base image).
// Unlike the Rotate function, which accepts speed argument, ModulateRotate only calculates static rotation amount.

// ModulateHue.  Warps horizontally based on difference between r and g, and vertically based on difference between g and b.
// Broken.










