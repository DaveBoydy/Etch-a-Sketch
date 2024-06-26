const DEFAULT_GRID_SIZE = 16;
const TYPE_BLACK = "black";
const TYPE_RAINBOW = "rainbow";
const TYPE_ERASER = "eraser";
const BLACK_BRUSH = "#000";
const ERASER_BRUSH = "#fff";

let sliderSize = DEFAULT_GRID_SIZE;
let brushType = TYPE_BLACK;
let mouseDown = false;

const canvas = document.getElementById("canvas");
const gridFragment = document.createDocumentFragment();

/*
 * Referenced DOM nodes with JS variables for the use of
 * event listeners.
 */
const blackButton = document.querySelector("#black-button");
const rainbowButton = document.querySelector("#rainbow-button");
const eraserButton = document.querySelector("#eraser-button");
const resizeButton = document.querySelector("#resize-button");
const resetButton = document.querySelector("#reset-button");

const sizeLabel = document.querySelector("#label-size-display");
const sizeSlider = document.querySelector("#size-slider");

/*
 * Setup event listeners (observers) after the page 'load' event fires
 * so that all page elements are loaded before any logic is executed.
 */
addEventListener("load", (event) => {
  sizeLabel.textContent = sizeSlider.value;
  sizeLabel.textContent = `Canvas size: ${sizeSlider.value} x ${sizeSlider.value}`;

  blackButton.addEventListener("click", setBlackButton);
  rainbowButton.addEventListener("click", setRainbowButton);
  eraserButton.addEventListener("click", setEraserButton);
  resetButton.addEventListener("click", setResetButton);
  resizeButton.addEventListener("click", setCanvasSize);
  document.body.addEventListener("mouseup", setMouseUP);
  document.body.addEventListener("mousedown", setMouseDown);
  sizeSlider.addEventListener("input", setSliderSize);

  setupGrid(DEFAULT_GRID_SIZE);

  console.log("The page is fully loaded.");
});

/*
 * Implemented controller logic to respond to calls
 * from event listeners with appropriate action(s) I.E. processing.
 */
//TODO set the selected brush type.
setBlackButton = () => {
  brushType = TYPE_BLACK;
};
setRainbowButton = () => {
  brushType = TYPE_RAINBOW;
};
setEraserButton = () => {
  brushType = TYPE_ERASER;
};

//TODO reset the canvas to default.
setResetButton = () => console.log("the canvas has been reset to default");

setSliderSize = (e) => {
  sizeLabel.textContent = `Canvas size: ${e.target.value} x ${e.target.value}`;
  sliderSize = e.target.value;

  console.log(`the slider size is ${sliderSize}px`);
};

setCanvasSize = () => {
  setupGrid(sliderSize);
};

setMouseUP = () => {
  mouseDown = false;
};

setMouseDown = () => {
  mouseDown = true;
};

/*
 * Helper functions.
 */

setupGrid = (size) => {
  removeGridTiles();

  for (let i = 1; i <= size; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "grid-row");
    console.log("created a new grid row");
    for (let j = 1; j <= size; j++) {
      let gridTile = document.createElement("div");
      gridTile.setAttribute("class", "grid-tile");
      row.appendChild(gridTile);
    }
    gridFragment.appendChild(row);
  }
  canvas.appendChild(gridFragment);

  addTileObservers();

  console.log("the canvas size has been set");
};

removeGridTiles = () => {
  document.querySelectorAll(".grid-row").forEach((row) => {
    row.parentNode.removeChild(row);
  });
  console.log("the canvas has been reset");
};

addTileObservers = () => {
  document.querySelectorAll(".grid-tile").forEach((tile) => {
    tile.addEventListener("mouseover", drawOnCanvas);
    tile.addEventListener("mousedown", drawOnCanvas);
  });
};

drawOnCanvas = (e) => {
  if (e.type === "mouseover" && !mouseDown) return;
  if (brushType === TYPE_RAINBOW) {
    const redRange = Math.floor(Math.random() * 256);
    const greenRange = Math.floor(Math.random() * 256);
    const blueRange = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${redRange}, ${greenRange}, ${blueRange})`;
  } else if (brushType === TYPE_BLACK) {
    e.target.style.backgroundColor = BLACK_BRUSH;
  } else if (brushType === TYPE_ERASER) {
    e.target.style.backgroundColor = ERASER_BRUSH;
  }
};
