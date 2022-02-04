const mainContainer = document.querySelector('.main-container')
const mainContDimension = mainContainer.offsetWidth;
const gridPixels = document.querySelectorAll('.untouched');
const resetButton = document.querySelector('.reset');
const toggleBlack = document.querySelector('.toggle-black')
const toggleRainbow = document.querySelector('.toggle-rainbow')
let toggleColors = false;




//create grid
createGrid(16)

function createGrid(x) {
    let dimension = mainContDimension / x;    
    for (let i = 0; i < x**2; i++) {
        const pixel = document.createElement('div')
        pixel.style.cssText = `height: ${dimension}px; width: ${dimension}px`
        pixel.classList.add('untouched')
        pixel.addEventListener('mouseover', changeBgColor);
        mainContainer.appendChild(pixel)
    }
    
}

function changeBgColor(e) {
    if (toggleColors === false) {
        e.target.style.backgroundColor = "#000000"
    } else {
        e.target.style.backgroundColor = randomColorGenerator()
    }
    
}

function randomColorGenerator() {
    let letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

//set up toggle RGB/black
toggleBlack.addEventListener('click', useBlack)
toggleRainbow.addEventListener('click', useRainbow)

function useBlack() {
    toggleColors = false;
}

function useRainbow() {
    toggleColors = true;
}


//set up reset function

resetButton.addEventListener('click', resetGrid);

function resetGrid() {
    //const gridPixels = document.querySelectorAll('.untouched');
    gridPixels.forEach((gridPixel) => {
        gridPixel.style.backgroundColor = "#ffffff"
    });
    replaceGrid()
};

//set up Create New Grid/Delete Old grid

function replaceGrid() {
    let gridPixels = document.querySelectorAll('.untouched');
    for (let i = 0; i < gridPixels.length; i++) {
        gridPixels[i].remove();
    }
    let newGridSizeStr = prompt("Enter New Grid Size 8-64")
    let newGridSize = parseInt(newGridSizeStr)
    //console.log(newGridSize)
    while (newGridSize > 64 || newGridSize < 8) {
        newGridSize = prompt("Invalid, reenter New Grid Size 8-64")
    }
    createGrid(newGridSize) 
}








/*
set up hover effect

gridPixels.forEach((gridPixel) => {
    gridPixel.addEventListener('mouseover', changeBgColor)
});

*/