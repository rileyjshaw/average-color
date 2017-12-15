'use strict';

// Helpers.
const {atan2, cos, sin, PI} = Math;
const sum = (a, b) => a + b;

// Constants.
const PI2 = PI * 2;
const X = 0;
const Y = 1;


/**
 * Returns the average color from a list of HSL arrays.
 *
 * HSL colors are converted from cylindrical coordinates to Cartesian
 * coordinates, averaged, and converted back to HSL.
 *
 * To retain consistent saturation, the Cartesian average is ignored and a
 * simple arithmetic mean is returned. This is an aesthetic choice; both values
 * are valid.
 *
 * For both input and output, the expected range is:  H => [0, 360]
 *                                                    S => [0, 100]
 *                                                    L => [0, 100]
 *
 * @param  {[H, S, L][]} colors   A list of HSL value arrays (colors can also
 *                                be passed in as separate arguments).
 *
 * @return {[H, S, L]}            The average color.
 */
export default function averageColor (...colors) {
	const result = averageColorNormalized(...colors);
	return [result[0] * 360, result[1] * 100, result[2] * 100];
}


/**
 * Same as above, but with output ranges normalized to [0, 1].
 */
export function averageColorNormalized (...colors) {
	// If a single colors array was provided as opposed to separate arguments
	// for each color, break it out.
	if (colors.length === 1 && Array.isArray(colors[0][0])) colors = colors[0];

	const N = colors.length;

	// Normalize the color components to range [0, 1].
	const normalizedColors = colors
		.map(([h, s, l]) => [h / 360, s / 100, l / 100])
		;

	const cartesianAverage = normalizedColors
		// Cylindrical => Cartesian coordinates.
		.map(([h, s, l]) => [s * cos(h * PI2), s * sin(h * PI2), l])
		// Sum the scaled coordinates to find a centerpoint.
		.reduce(([xA, yA, zA], [x, y, z]) => [
			xA + x / N,
			yA + y / N,
			zA + z / N,
		], [0, 0, 0])
		;

	// Convert the average hue value back to a positive polar angle.
	const H = (atan2(cartesianAverage[Y], cartesianAverage[X]) / PI2 + 1) % 1;

	// Take the arithmetic mean of all saturation values.
	const S = normalizedColors.map(([h, s, l]) => s / N).reduce(sum);

	// Take the arithmetic mean of all lightness values.
	const L = cartesianAverage[2];

	return [H, S, L];
}
