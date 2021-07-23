// variables for grid and size + color inputs from user
const sizePicker = document.getElementById('sizePicker');
const grid = document.getElementById('pixelCanvas');
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const colorPicker = document.getElementById('colorPicker');

/**
  * @desc listening for size to be submitted by user, preventing page from
  * reloading and calling the makeGrid() function
*/
sizePicker.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid();
});

/**
  * @desc creates a grid of squares after clearing previous grid
  * @returns grid of user's dimensions with squares that change color on click
*/
function makeGrid() {
    grid.innerHTML = "";
    let gridHeight = inputHeight.value;
    let gridWidth = inputWidth.value;
    for (let x = 0; x < gridHeight; x++) {
        const newRow = document.createElement('tr');
        for (let y = 0; y < gridWidth; y++) {
            const newCell = document.createElement('td');
            newRow.appendChild(newCell);
            newCell.addEventListener('click', function() {
                let selectedColor = colorPicker.value;
                this.style.backgroundColor = selectedColor;
            });
        }
        grid.appendChild(newRow);
    }
};
