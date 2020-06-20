// Select color input
// Select size input

const selectColor = document.getElementById('selectColor');

const numbersOfrow = document.getElementById('numbersOfrow');

const numbersOfwidth = document.getElementById('numbersOfwidth');

const pixelOfCanvas = document.getElementById('pixelOfCanvas');

const sizeOfform = document.getElementById('sizeOfform');

// When size is submitted by the user, call makeGrid()
sizeOfform.addEventListener('submit', function(event) {
    pixelOfCanvas.innerHTML = '';
    event.preventDefault();
    makeGrid();

});

pixelOfCanvas.addEventListener('click', function(event) {
    if (event.target.nodeName === 'TD') {
        event.target.style.backgroundColor = selectColor.value;
    }

});

/*
This makeGrid function to know :
1- the height that user insert
2- first loop to know the height that have variable (i)
3- we are use insertRow method
4-In second loop we are use insertCell method
*/

function makeGrid() {
    for (let i = 0; i < numbersOfrow.value; i++) {
        const row = pixelOfCanvas.insertRow(0);
        for (let k = 0; k < numbersOfwidth.value; k++) {
            row.insertCell(0);
        }

    }



};
