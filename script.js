const DEFAULT_GRID_SIZE = 16;

const canvas = document.getElementById("canvas");

/*
 * Referenced DOM nodes with JS variables for the use of
 * event listeners defined later in the code.
 */
const blackButton = document.querySelector("#black-button");
const rainbowButton = document.querySelector("#rainbow-button");
const eraserButton = document.querySelector("#eraser-button");
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

//TODO set the grid size.
setSliderSize = (e) => {
  sizeLabel.textContent = `Canvas size: ${e.target.value} x ${e.target.value}`;
  setupGrid(e.target.value);
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

  sizeLabel.textContent = sizeSlider.value;
  sizeLabel.textContent = `Canvas size: ${sizeSlider.value} x ${sizeSlider.value}`;
  sizeSlider.addEventListener("input", setSliderSize);

  setupGrid(DEFAULT_GRID_SIZE);

  console.log("The page is fully loaded.");
});

/*
 * Helper functions
 */

function setupGrid(size) {
  removeGridTiles();
  for (let i = 0; i < size * size; i++) {
    const gridTile = document.createElement("div");
    gridTile.classList.add("grid-tile");
    canvas.appendChild(gridTile);
    console.log("added a new tile");
  }
  console.log("the canvas size has been set");
}

function removeGridTiles() {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
    console.log("removed an old tile");
  }
  console.log("the canvas has been reset");
}
