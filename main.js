newGrid.addEventListener("click", createGrid);
clear.addEventListener("click", clearGrid);
defaultColor.addEventListener("click", createDefaultColor);
randomColor.addEventListener("click", createRandomColorBoxes);

function createGrid() {
    let gridSize = prompt("How many squares per side should the grid be?");
    //Removes child nodes from previous function call
    document.getElementById("grid").textContent = "";
    document.getElementById("grid").remo;
    //Removes grid styling from previous function call
    document.getElementById("grid").style.gridTemplateColumns = "";
    for (let i = 0; i < gridSize * gridSize; i++) {
        let gridCell = document.createElement("div");
        gridCell.classList.add("grid-item");
        let gridCellSize = grid.scrollWidth / gridSize;
        gridCell.style.height = gridCellSize + "px";
        gridCell.style.width = gridCellSize + "px";

        if (i < gridSize) {
            grid.style.gridTemplateColumns += " auto";
        }
        grid.appendChild(gridCell);
    }
    createDefaultColor();
}

function createDefaultColor() {
    let defaultCell = document.querySelectorAll(".grid-item");
    defaultCell.forEach(defaultCell => {
        defaultCell.addEventListener("mouseover", e => {
            e.target.style.backgroundColor = "#DBD77F";
        });
    });
}

function clearGrid() {
    let clearedCell = document.querySelectorAll(".grid-item");
    clearedCell.forEach(clearedCell => {
        clearedCell.style.backgroundColor = "#e1e7de";
    });
}

function createRandomColor() {
    let randomColor = Math.floor(Math.random() * 16777216).toString(16);
    return "#000000".slice(0, -randomColor.length) + randomColor;
}

function createRandomColorBoxes() {
    let randomColorCell = document.querySelectorAll(".grid-item");
    randomColorCell.forEach(randomColorCell => {
        randomColorCell.addEventListener("mouseover", e => {
            e.target.style.backgroundColor = `${createRandomColor()}`;
        });
    });
}
