// Select color input
// Select size input

const backgroundColor = selectColor.value;


const inputHeight = document.getElementById('inputHeight');

const inputWidth = document.getElementById('inputWidth');

const selectSize = document.getElementById('selectSize');

const selectColor = document.getElementById('selectColor');

const selectPixal = document.getElementById('selectPixal');

const submit = document.getElementById("selectSize");

const choosePixal = document.getElementById("selectPixal");

// When size is submitted by the user, call makeGrid()



submit.addEventListener('submit', function (firstFunction) {

  alert('Thank You For Select')

   selectPixal.innerhtml = '---';

   height = document.getElementById("inputHeight").value;

   width = document.getElementById("inputWidth").value;

   firstFunction.preventDefault();

   makeGrid(height, width);
    firstFunction.preventDefault();




});

choosePixal.addEventListener('click', function(secondFunction) {

    if (secondFunction.target.nodeName === 'TD') {



        secondFunction.target.style.backgroundColor = backgroundColor;
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
    let table;

    for (let i = 0; i < inputHeight.value; i++) {

        let table = selectPixal.insertRow(i);


        for (let k = 0; k < inputWidth.value; k++) {


            table.insertCell(k);
        }

    }



};
