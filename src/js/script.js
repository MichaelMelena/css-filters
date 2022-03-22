//

//#region constants
/**
 * @type {string}
 * @constant BLUR
 */
const BLUR = "blur-filter";
/**
 * @type {string}
 * @constant BRIGHTNESS
 */
const BRIGHTNESS = "brightness-filter";
/**
 * @type {string}
 * @constant CONTRAST
 */
const CONTRAST = "contrast-filter";
/**
 * @type {string}
 * @constant DROPSHADOW
 */
const DROPSHADOW = "drop-shadow-filter";
/**
 * @type {string}
 * @constant GRAYSCALE
 */
const GRAYSCALE = "grayscale-filter";
/**
 * @type {string}
 * @constant HUEROTATE
 */
const HUEROTATE = "hue-rotate-filter";
/**
 * @type {string}
 * @constant INVERT
 */
const INVERT = "invert-filter";
/**
 * @type {string}
 * @constant OPACITY
 */
const OPACITY = "opacity-filter";
/**
 * @type {string}
 * @constant SATURATE
 */
const SATURATE = "saturate-filter";
/**
 * @type {string}
 * @constant SEPIA
 */
const SEPIA = "sepia-filter";

//#endregion

let blurRange = document.getElementById("blur");
let brightnessRange = document.getElementById("brightness");
let contrastRange = document.getElementById("contrast");
let grayscaleRange = document.getElementById("grayscale");
let hueRotateRange = document.getElementById("hue-rotate");
let invertRange = document.getElementById("invert");
let opacityRange = document.getElementById("opacity");
let saturateRange = document.getElementById("saturate");
let sepiaRange = document.getElementById("sepia");

// dropshadow inputs
let dropShadowRangeX = document.getElementById("drop-shadow-x");
let dropShadowRangeY = document.getElementById("drop-shadow-y");
let dropShadowRangeBlur = document.getElementById("drop-shadow-blur");
let dropShadowColorPicker = document.getElementById("drop-shadow-color");

/**
 *
 * @param {InputEvent} event
 */
function setBlur(event) {
  let blur = blurRange.value;

  let filter = `blur(${blur}px)`;
  apply(BLUR, filter);
}

//#region event handlers
/**
 *
 * @param {InputEvent} event
 *
 * @returns {undefined}
 */
function setBrightness(event) {
  let brightness = brightnessRange.value;
  let filter = `brightness(${brightness}%)`;
  apply(BRIGHTNESS, filter);
}

/**
 *
 * @param {InputEvent} event
 *
 * @returns {undefined}
 */
function setContrast(event) {
  let contrast = contrastRange.value;
  let filter = `contrast(${contrast}%)`;
  apply(CONTRAST, filter);
}

/**
 *
 * @param {InputEvent} event
 *
 * @returns {undefined}
 */
function setDropshadow(event) {
  let x = dropShadowRangeX.value;
  let y = dropShadowRangeY.value;
  let blur = dropShadowRangeBlur.value;
  let color = dropShadowColorPicker.value;
  let filter = `drop-shadow(${x}px ${y}px ${blur}px ${color})`;
  apply(DROPSHADOW, filter);
}

/**
 *
 * @param {InputEvent} event
 *
 * @returns {undefined}
 */
function setGrayscale(event) {
  let grayscale = grayscaleRange.value;
  let filter = `grayscale(${grayscale}%)`;
  apply(GRAYSCALE, filter);
}

/**
 *
 * @param {InputEvent} event
 *
 * @returns {undefined}
 */
function setHuerotate(event) {
  let degrees = hueRotateRange.value;
  let filter = `hue-rotate(${degrees}deg)`;
  apply(HUEROTATE, filter);
}

/**
 *
 * @param {InputEvent} event
 *
 * @returns {undefined}
 */
function setInvert(event) {
  let invert = invertRange.value;
  let filter = `invert(${invert}%)`;
  apply(INVERT, filter);
}

/**
 *
 * @param {InputEvent} event
 *
 * @returns {undefined}
 */
function setOpacity(event) {
  let opacity = opacityRange.value;
  let filter = `opacity(${opacity}%)`;
  apply(OPACITY, filter);
}

/**
 *
 * @param {InputEvent} event
 *
 * @returns {undefined}
 */
function setSaturate(event) {
  let saturate = saturateRange.value;
  let filter = `saturate(${saturate}%)`;
  apply(SATURATE, filter);
}

/**
 *
 * @param {InputEvent} event
 *
 * @returns {undefined}
 */
function setSepia(event) {
  let sepia = sepiaRange.value;
  let filter = `sepia(${sepia}%)`;
  apply(SEPIA, filter);
}
//#endregion

//#region helper methods
/**
 *
 * @param {string} filterClass
 * @param {string} filterValue
 *
 * @returns {undefined}
 */
function apply(filterClass, filterValue) {
  let elements = getTargetElements(filterClass);
  applyFilterToElemetns(elements, filterValue);
}

/**
 *
 * @param {string} filterClass
 *
 * @returns {HTMLElement[]} all elements that are targeted by this class
 */
function getTargetElements(filterClass) {
  let elements = [];
  let paretns = document.getElementsByClassName(filterClass);
  for (let parent of paretns) {
    let childNodes = parent.getElementsByTagName("div");
    for (let childNode of childNodes) {
      elements.push(childNode);
    }
  }

  return elements;
}

/**
 *
 * @param {HTMLElement[]} elements
 * @param {string} filterValue
 *
 * @returns {undefined}
 */
function applyFilterToElemetns(elements, filterValue) {
  for (let element of elements) {
    element.style.filter = filterValue;
  }
}
//#endregion

// subsrcibe to events
blurRange.addEventListener("input", setBlur);
brightnessRange.addEventListener("input", setBrightness);
contrastRange.addEventListener("input", setContrast);
grayscaleRange.addEventListener("input", setGrayscale);
hueRotateRange.addEventListener("input", setHuerotate);
invertRange.addEventListener("input", setInvert);
opacityRange.addEventListener("input", setOpacity);
saturateRange.addEventListener("input", setSaturate);
sepiaRange.addEventListener("input", setSepia);

// dropshadow
dropShadowRangeX.addEventListener("input", setDropshadow);
dropShadowRangeY.addEventListener("input", setDropshadow);
dropShadowRangeBlur.addEventListener("input", setDropshadow);
dropShadowColorPicker.addEventListener("input", setDropshadow);
