```
###############################################################################
################################ average-color ################################
###############################################################################

Returns the average color from a list of HSL arrays.

HSL colors are converted from cylindrical coordinates to Cartesian
coordinates, averaged, and converted back to HSL.

To retain consistent saturation, the Cartesian average is ignored and a
simple arithmetic mean is returned. This is an aesthetic choice; either value
could be considered valid.

For both input and output, the expected range is:  H => [0, 360]
                                                   S => [0, 100]
                                                   L => [0, 100]

An additional `averageColorNormalized` function is provided that expects
similar input ranges, but outputs component values in the [0, 1] range.

@param  {[H, S, L][]} colors   A list of HSL value arrays (colors can also
                               be passed in as separate arguments).

@return {[H, S, L]}            The average color.


Installation
------------

npm i average-color


Usage
-----

import averageColor, {averageColorNormalized} from 'average-color';

const newColor = averageColor([20, 70, 40], [355, 70, 60]);
// Result: [7.5, 70, 50]

const normalizedColor = averageColorNormalized([20, 70, 40], [355, 70, 60]);
// Result: [0.02083, 0.7, 0.5]

-------------------------------------------------------------------------------

Licensed under MIT:
  https://github.com/rileyjshaw/average-color/blob/master/LICENSE

Created by rileyjshaw:
  http://rileyjshaw.com/
```
