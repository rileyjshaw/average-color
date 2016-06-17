```
###############################################################################
################################ average-color ################################
###############################################################################

Returns the average color from a list of HSL arrays.

Computes the average saturation and lightness directly from the HSL values, but
computes hue from an RGB conversion. This ensures that the color won't be muddy
(as would be the case for RGB-only), but will be fairly accurate in terms of
hue (which would be untrue for HSL-only).

@param  {[H, S, L][]} colors  A list of HSL value arrays (colors can be passed
                              in as separate arguments).

                              Range:  H => [0, 360]
                                      S => [0, 100]
                                      L => [0, 100]

@return {[H, S, L]}           The average color.


Installation
------------

npm i average-color


Usage
-----

const averageColor = require('average-color');

const newColor = averageColor([20, 70, 40], [355, 70, 60]);  // [8, 70, 50]


-------------------------------------------------------------------------------

Licensed under MIT:
  https://github.com/rileyjshaw/average-color/blob/master/LICENSE

Created by rileyjshaw:
  http://rileyjshaw.com/
```
