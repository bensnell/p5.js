/**
 * @module Constants
 * @submodule Constants
 * @for p5
 */

const _PI = Math.PI;

const constants = {
  // GRAPHICS RENDERER
  /**
   * The default, two-dimensional renderer.
   * @property {String} P2D
   * @final
   */
  P2D : 'p2d',
  /**
   * One of the two render modes in p5.js: P2D (default renderer) and WEBGL
   * Enables 3D render by introducing the third dimension: Z
   * @property {String} WEBGL
   * @final
   */
  WEBGL : 'webgl',

  // ENVIRONMENT
  /**
   * @property {String} ARROW
   * @final
   */
  ARROW : 'default',
  /**
   * @property {String} CROSS
   * @final
   */
  CROSS : 'crosshair',
  /**
   * @property {String} HAND
   * @final
   */
  HAND : 'pointer',
  /**
   * @property {String} MOVE
   * @final
   */
  MOVE : 'move',
  /**
   * @property {String} TEXT
   * @final
   */
  TEXT : 'text',
  /**
   * @property {String} WAIT
   * @final
   */
  WAIT : 'wait',

  // TRIGONOMETRY

  /**
   * HALF_PI is a mathematical constant with the value
   * 1.57079632679489661923. It is half the ratio of the
   * circumference of a circle to its diameter. It is useful in
   * combination with the trigonometric functions <a href:"#/p5/sin">sin()</a> and <a href:"#/p5/cos">cos()</a>.
   *
   * @property {Number} HALF_PI
   * @final
   *
   * @example
   * <div><code>
   * arc(50, 50, 80, 80, 0, HALF_PI),
   * </code></div>
   *
   * @alt
   * 80x80 white quarter-circle with curve toward bottom right of canvas.
   *
   */
  HALF_PI : _PI / 2,
  /**
   * PI is a mathematical constant with the value
   * 3.14159265358979323846. It is the ratio of the circumference
   * of a circle to its diameter. It is useful in combination with
   * the trigonometric functions <a href:"#/p5/sin">sin()</a> and <a href:"#/p5/cos">cos()</a>.
   *
   * @property {Number} PI
   * @final
   *
   * @example
   * <div><code>
   * arc(50, 50, 80, 80, 0, PI),
   * </code></div>
   *
   * @alt
   * white half-circle with curve toward bottom of canvas.
   *
   */
  PI : _PI,
  /**
   * QUARTER_PI is a mathematical constant with the value 0.7853982.
   * It is one quarter the ratio of the circumference of a circle to
   * its diameter. It is useful in combination with the trigonometric
   * functions <a href:"#/p5/sin">sin()</a> and <a href:"#/p5/cos">cos()</a>.
   *
   * @property {Number} QUARTER_PI
   * @final
   *
   * @example
   * <div><code>
   * arc(50, 50, 80, 80, 0, QUARTER_PI),
   * </code></div>
   *
   * @alt
   * white eighth-circle rotated about 40 degrees with curve bottom right canvas.
   *
   */
  QUARTER_PI : _PI / 4,
  /**
   * TAU is an alias for TWO_PI, a mathematical constant with the
   * value 6.28318530717958647693. It is twice the ratio of the
   * circumference of a circle to its diameter. It is useful in
   * combination with the trigonometric functions <a href:"#/p5/sin">sin()</a> and <a href:"#/p5/cos">cos()</a>.
   *
   * @property {Number} TAU
   * @final
   *
   * @example
   * <div><code>
   * arc(50, 50, 80, 80, 0, TAU),
   * </code></div>
   *
   * @alt
   * 80x80 white ellipse shape in center of canvas.
   *
   */
  TAU : _PI * 2,
  /**
   * TWO_PI is a mathematical constant with the value
   * 6.28318530717958647693. It is twice the ratio of the
   * circumference of a circle to its diameter. It is useful in
   * combination with the trigonometric functions <a href:"#/p5/sin">sin()</a> and <a href:"#/p5/cos">cos()</a>.
   *
   * @property {Number} TWO_PI
   * @final
   *
   * @example
   * <div><code>
   * arc(50, 50, 80, 80, 0, TWO_PI),
   * </code></div>
   *
   * @alt
   * 80x80 white ellipse shape in center of canvas.
   *
   */
  TWO_PI : _PI * 2,
  /**
   * Constant to be used with <a href:"#/p5/angleMode">angleMode()</a> function, to set the mode which
   * p5.js interprates and calculates angles (either DEGREES or RADIANS).
   * @property {String} DEGREES
   * @final
   *
   * @example
   * <div class:'norender'><code>
   * function setup() {
   *   angleMode(DEGREES),
   * }
   * </code></div>
   */
  DEGREES : 'degrees',
  /**
   * Constant to be used with <a href:"#/p5/angleMode">angleMode()</a> function, to set the mode which
   * p5.js interprates and calculates angles (either RADIANS or DEGREES).
   * @property {String} RADIANS
   * @final
   *
   * @example
   * <div class:'norender'><code>
   * function setup() {
   *   angleMode(RADIANS),
   * }
   * </code></div>
   */
  RADIANS : 'radians',
  DEG_TO_RAD : _PI / 180.0,
  RAD_TO_DEG : 180.0 / _PI,

  // SHAPE
  /**
   * @property {String} CORNER
   * @final
   */
  CORNER : 'corner',
  /**
   * @property {String} CORNERS
   * @final
   */
  CORNERS : 'corners',
  /**
   * @property {String} RADIUS
   * @final
   */
  RADIUS : 'radius',
  /**
   * @property {String} RIGHT
   * @final
   */
  RIGHT : 'right',
  /**
   * @property {String} LEFT
   * @final
   */
  LEFT : 'left',
  /**
   * @property {String} CENTER
   * @final
   */
  CENTER : 'center',
  /**
   * @property {String} TOP
   * @final
   */
  TOP : 'top',
  /**
   * @property {String} BOTTOM
   * @final
   */
  BOTTOM : 'bottom',
  /**
   * @property {String} BASELINE
   * @final
   * @default alphabetic
   */
  BASELINE : 'alphabetic',
  /**
   * @property {Number} POINTS
   * @final
   * @default 0x0000
   */
  POINTS : 0x0000,
  /**
   * @property {Number} LINES
   * @final
   * @default 0x0001
   */
  LINES : 0x0001,
  /**
   * @property {Number} LINE_STRIP
   * @final
   * @default 0x0003
   */
  LINE_STRIP : 0x0003,
  /**
   * @property {Number} LINE_LOOP
   * @final
   * @default 0x0002
   */
  LINE_LOOP : 0x0002,
  /**
   * @property {Number} TRIANGLES
   * @final
   * @default 0x0004
   */
  TRIANGLES : 0x0004,
  /**
   * @property {Number} TRIANGLE_FAN
   * @final
   * @default 0x0006
   */
  TRIANGLE_FAN : 0x0006,
  /**
   * @property {Number} TRIANGLE_STRIP
   * @final
   * @default 0x0005
   */
  TRIANGLE_STRIP : 0x0005,
  /**
   * @property {String} QUADS
   * @final
   */
  QUADS : 'quads',
  /**
   * @property {String} QUAD_STRIP
   * @final
   * @default quad_strip
   */
  QUAD_STRIP : 'quad_strip',
  /**
   * @property {String} TESS
   * @final
   * @default tess
   */
  TESS : 'tess',
  /**
   * @property {String} CLOSE
   * @final
   */
  CLOSE : 'close',
  /**
   * @property {String} OPEN
   * @final
   */
  OPEN : 'open',
  /**
   * @property {String} CHORD
   * @final
   */
  CHORD : 'chord',
  /**
   * @property {String} PIE
   * @final
   */
  PIE : 'pie',
  /**
   * @property {String} PROJECT
   * @final
   * @default square
   */
  PROJECT : 'square', // PEND: careful this is counterintuitive
  /**
   * @property {String} SQUARE
   * @final
   * @default butt
   */
  SQUARE : 'butt',
  /**
   * @property {String} ROUND
   * @final
   */
  ROUND : 'round',
  /**
   * @property {String} BEVEL
   * @final
   */
  BEVEL : 'bevel',
  /**
   * @property {String} MITER
   * @final
   */
  MITER : 'miter',

  // COLOR
  /**
   * @property {String} RGB
   * @final
   */
  RGB : 'rgb',
  /**
   * @property {String} HSB
   * @final
   */
  HSB : 'hsb',
  /**
   * @property {String} HSL
   * @final
   */
  HSL : 'hsl',

  // DOM EXTENSION
  /**
   * AUTO allows us to automatically set the width or height of an element (but not both),
   * based on the current height and width of the element. Only one parameter can
   * be passed to the <a href:"/#/p5.Element/size">size</a> function as AUTO, at a time.
   *
   * @property {String} AUTO
   * @final
   */
  AUTO : 'auto',

  /**
   * @property {Number} ALT
   * @final
   */
  // INPUT
  ALT : 18,
  /**
   * @property {Number} BACKSPACE
   * @final
   */
  BACKSPACE : 8,
  /**
   * @property {Number} CONTROL
   * @final
   */
  CONTROL : 17,
  /**
   * @property {Number} DELETE
   * @final
   */
  DELETE : 46,
  /**
   * @property {Number} DOWN_ARROW
   * @final
   */
  DOWN_ARROW : 40,
  /**
   * @property {Number} ENTER
   * @final
   */
  ENTER : 13,
  /**
   * @property {Number} ESCAPE
   * @final
   */
  ESCAPE : 27,
  /**
   * @property {Number} LEFT_ARROW
   * @final
   */
  LEFT_ARROW : 37,
  /**
   * @property {Number} OPTION
   * @final
   */
  OPTION : 18,
  /**
   * @property {Number} RETURN
   * @final
   */
  RETURN : 13,
  /**
   * @property {Number} RIGHT_ARROW
   * @final
   */
  RIGHT_ARROW : 39,
  /**
   * @property {Number} SHIFT
   * @final
   */
  SHIFT : 16,
  /**
   * @property {Number} TAB
   * @final
   */
  TAB : 9,
  /**
   * @property {Number} UP_ARROW
   * @final
   */
  UP_ARROW : 38,

  // RENDERING
  /**
   * @property {String} BLEND
   * @final
   * @default source-over
   */
  BLEND : 'source-over',
  /**
   * @property {String} REMOVE
   * @final
   * @default destination-out
   */
  REMOVE : 'destination-out',
  /**
   * @property {String} ADD
   * @final
   * @default lighter
   */
  ADD : 'lighter',
  //ADD: 'add', //
  //SUBTRACT: 'subtract', //
  /**
   * @property {String} DARKEST
   * @final
   */
  DARKEST : 'darken',
  /**
   * @property {String} LIGHTEST
   * @final
   * @default lighten
   */
  LIGHTEST : 'lighten',
  /**
   * @property {String} DIFFERENCE
   * @final
   */
  DIFFERENCE : 'difference',
  /**
   * @property {String} SUBTRACT
   * @final
   */
  SUBTRACT : 'subtract',
  /**
   * @property {String} EXCLUSION
   * @final
   */
  EXCLUSION : 'exclusion',
  /**
   * @property {String} MULTIPLY
   * @final
   */
  MULTIPLY : 'multiply',
  /**
   * @property {String} SCREEN
   * @final
   */
  SCREEN : 'screen',
  /**
   * @property {String} REPLACE
   * @final
   * @default copy
   */
  REPLACE : 'copy',
  /**
   * @property {String} OVERLAY
   * @final
   */
  OVERLAY : 'overlay',
  /**
   * @property {String} HARD_LIGHT
   * @final
   */
  HARD_LIGHT : 'hard-light',
  /**
   * @property {String} SOFT_LIGHT
   * @final
   */
  SOFT_LIGHT : 'soft-light',
  /**
   * @property {String} DODGE
   * @final
   * @default color-dodge
   */
  DODGE : 'color-dodge',
  /**
   * @property {String} BURN
   * @final
   * @default color-burn
   */
  BURN : 'color-burn',

  // FILTERS
  /**
   * @property {String} THRESHOLD
   * @final
   */
  THRESHOLD : 'threshold',
  /**
   * @property {String} GRAY
   * @final
   */
  GRAY : 'gray',
  /**
   * @property {String} OPAQUE
   * @final
   */
  OPAQUE : 'opaque',
  /**
   * @property {String} INVERT
   * @final
   */
  INVERT : 'invert',
  /**
   * @property {String} POSTERIZE
   * @final
   */
  POSTERIZE : 'posterize',
  /**
   * @property {String} DILATE
   * @final
   */
  DILATE : 'dilate',
  /**
   * @property {String} ERODE
   * @final
   */
  ERODE : 'erode',
  /**
   * @property {String} BLUR
   * @final
   */
  BLUR : 'blur',

  // TYPOGRAPHY
  /**
   * @property {String} NORMAL
   * @final
   */
  NORMAL : 'normal',
  /**
   * @property {String} ITALIC
   * @final
   */
  ITALIC : 'italic',
  /**
   * @property {String} BOLD
   * @final
   */
  BOLD : 'bold',
  /**
   * @property {String} BOLDITALIC
   * @final
   */
  BOLDITALIC : 'bold italic',

  // TYPOGRAPHY-INTERNAL
  _DEFAULT_TEXT_FILL : '#000000',
  _DEFAULT_LEADMULT : 1.25,
  _CTX_MIDDLE : 'middle',

  // VERTICES
  /**
   * @property {String} LINEAR
   * @final
   */
  LINEAR : 'linear',
  /**
   * @property {String} QUADRATIC
   * @final
   */
  QUADRATIC : 'quadratic',
  /**
   * @property {String} BEZIER
   * @final
   */
  BEZIER : 'bezier',
  /**
   * @property {String} CURVE
   * @final
   */
  CURVE : 'curve',

  // WEBGL DRAWMODES
  /**
   * @property {String} STROKE
   * @final
   */
  STROKE : 'stroke',
  /**
   * @property {String} FILL
   * @final
   */
  FILL : 'fill',
  /**
   * @property {String} TEXTURE
   * @final
   */
  TEXTURE : 'texture',
  /**
   * @property {String} IMMEDIATE
   * @final
   */
  IMMEDIATE : 'immediate',

  // WEBGL TEXTURE MODE
  // NORMAL already exists for typography
  /**
   * @property {String} IMAGE
   * @final
   */
  IMAGE : 'image',

  // WEBGL TEXTURE WRAP AND FILTERING
  // LINEAR already exists above
  /**
   * @property {String} NEAREST
   * @final
   */
  NEAREST : 'nearest',
  /**
   * @property {String} REPEAT
   * @final
   */
  REPEAT : 'repeat',
  /**
   * @property {String} CLAMP
   * @final
   */
  CLAMP : 'clamp',
  /**
   * @property {String} MIRROR
   * @final
   */
  MIRROR : 'mirror',

  // DEVICE-ORIENTATION
  /**
   * @property {String} LANDSCAPE
   * @final
   */
  LANDSCAPE : 'landscape',
  /**
   * @property {String} PORTRAIT
   * @final
   */
  PORTRAIT : 'portrait',

  // DEFAULTS
  _DEFAULT_STROKE : '#000000',
  _DEFAULT_FILL : '#FFFFFF',

  /**
   * @property {String} GRID
   * @final
   */
  GRID : 'grid',

  /**
   * @property {String} AXES
   * @final
   */
  AXES : 'axes'

}