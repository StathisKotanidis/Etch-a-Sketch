

let gridContainer = document.querySelector('.grid-container')

const rows = 8;
const cols = 8;

for (let i = 1; i <= rows * cols; i++) {
    let squareDiv = document.createElement('div')
    squareDiv.style.backgroundColor = 'blue'
    // squareDiv.style.width = `calc(100%/ ${cols})`; // Divide 100% by the number of columns
    // squareDiv.style.height = `calc(100% / ${rows})`; // Divide 100% by the number of rows
    squareDiv.style.border = "1px solid black"
    gridContainer.appendChild(squareDiv)
}