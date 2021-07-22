// variables for size input and grid
var sizePicker = document.getElementById('sizePicker');
var grid = document.getElementById('pixelCanvas');

// listening for size to be submitted by user
sizePicker.addEventListener('submit', function(event) {
    // cancel default action
    event.preventDefault();
    // variables for entered width and height
    var gridHeight = document.getElementById('inputHeight').value;
    var gridWidth = document.getElementById('inputWidth').value;
    // calling the makeGrid() function
    makeGrid(gridHeight, gridWidth);
});

function makeGrid(gridHeight, gridWidth) {
    // clear previous grid
    grid.innerHTML = "";
    for (var x = 0; x < gridHeight; x++) {
        // create a new row
        var newRow = document.createElement('tr');
        for (var y = 0; y < gridWidth; y++) {
            // create a new cell
            var newCell = document.createElement('td');
            // append cell to row
            newRow.appendChild(newCell);
            // setting variable for status of mouse, starting condition is up
            var mouseDown = false;
            // add listeners to check mouse click status
            newCell.addEventListener('mousedown', function() {
                mouseDown = true;
            });
            newCell.addEventListener('mouseup', function() {
                mouseDown = false;
            });
            // add listener to continue drawing in cells if mouse is down
            newCell.addEventListener('mousemove', function() {
                if (mouseDown) {
                    // variable for the chosen color input
                    var selectedColor = document.getElementById('colorPicker').value;
                    // adding "this" keyword to point to each newly added cell
                    // vs. the very last cell
                    this.style.backgroundColor = selectedColor;
                };
            });
        }
        // append row to grid
        grid.appendChild(newRow);
    }
};
