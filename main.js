let resetButton = document.querySelector('#clear-button')
let grid = document.querySelector('.grid')
let button4x4 = document.querySelector('#button1')
let button8x8 = document.querySelector('#button2')
let button16x16 = document.querySelector('#button3')
let button32x32 = document.querySelector('#button4')
let button64x64 = document.querySelector('#button5')
let colorPicker = document.querySelector('#color-picker')
let randomButton = document.querySelector('#random-button')

function createGrid(rows, cols) {

    grid.innerHTML = '';

    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    for (let i = 1; i <= rows * cols; i++) {
        let squareDiv = document.createElement('div');
        squareDiv.style.backgroundColor = 'white';
        squareDiv.style.border = "1px solid black";
        grid.appendChild(squareDiv);
    }
}

button4x4.addEventListener('click', () => {
    createGrid(4, 4);
    coloringDivs()
});

button8x8.addEventListener('click', () => {
    createGrid(8, 8);
    coloringDivs()
});

button16x16.addEventListener('click', () => {
    createGrid(16, 16);
    coloringDivs()
});

button32x32.addEventListener('click', () => {
    createGrid(32, 32);
    coloringDivs()
});

button64x64.addEventListener('click', () => {
    createGrid(64, 64);
    coloringDivs()
});

function resetGrid() {

    grid.innerHTML = '';
}

resetButton.addEventListener('click', () => {
    resetGrid()
})

function coloringDivs() {
    let gridDivs = grid.querySelectorAll('div');

    gridDivs.forEach(div => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });
    });
}


function colorPickerInput(selectedColor) {
    let gridDivs = grid.querySelectorAll('div');

    gridDivs.forEach(div => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = selectedColor
        });
    });
}

colorPicker.addEventListener('input', () => {
    const selectedColor = colorPicker.value
    colorPickerInput(selectedColor)
});

function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function applyRandomColor() {

    let gridDivs = grid.querySelectorAll('div');

    gridDivs.forEach(div => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = randomColor()
        });
    });
}

randomButton.addEventListener('click', () => {
    applyRandomColor()
})
