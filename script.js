const DEFAULT_GRID_SIZE = 16;

const canvas = document.getElementById("canvas");
const gridFragment = document.createDocumentFragment();
let sliderSize = DEFAULT_GRID_SIZE;

/*
 * Referenced DOM nodes with JS variables for the use of
 * event listeners defined later in the code.
 */
const blackButton = document.querySelector("#black-button");
const rainbowButton = document.querySelector("#rainbow-button");
const eraserButton = document.querySelector("#eraser-button");
const resizeButton = document.querySelector("#resize-button");
const resetButton = document.querySelector("#reset-button");

const sizeLabel = document.querySelector("#label-size-display");
const sizeSlider = document.querySelector("#size-slider");

/*
 * Implemented controller logic to respond to calls
 * from event listeners with appropriate action(s) I.E. (processing).
 */
//TODO set the selected brush type.
setBlackButton = () => console.log("the black brush has been selected");
setRainbowButton = () => console.log("the rainbow brush has been selected");
setEraserButton = () => console.log("the eraser brush has been selected");

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

/*
 * Setup event listeners (observers) after the page 'load' event fires
 * so that all page elements are loaded before any logic is executed.
 */
addEventListener("load", (event) => {
  blackButton.addEventListener("click", setBlackButton);
  rainbowButton.addEventListener("click", setRainbowButton);
  eraserButton.addEventListener("click", setEraserButton);
  resetButton.addEventListener("click", setResetButton);
  resizeButton.addEventListener("click", setCanvasSize);

  sizeLabel.textContent = sizeSlider.value;
  sizeLabel.textContent = `Canvas size: ${sizeSlider.value} x ${sizeSlider.value}`;
  sizeSlider.addEventListener("input", setSliderSize);

  setupGrid(DEFAULT_GRID_SIZE);

  console.log("The page is fully loaded.");
});

/*
 * Helper functions
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

  console.log("the canvas size has been set");
};

removeGridTiles = () => {
  document.querySelectorAll(".grid-row").forEach((row) => {
    row.parentNode.removeChild(row);
  });
  console.log("the canvas has been reset");
};
