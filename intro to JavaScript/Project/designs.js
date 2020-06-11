// Select color input
var color;
// Select size input
var sizeForm = document.querySelector('#sizePicker');
// add an event listener so when the submit button is clicked we do stuff
sizeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // get the height from the input box
    var heightEle = document.querySelector('#inputHeight');
    //Assign the value inside the element to our variable
    var height = heightEle.value;
    // get the width from the input box
    var widthEle = document.querySelector('#inputWidth');
    // assign the value to our width variable
    var width = widthEle.value;
    // When size is submitted by the user, call makeGrid()
    makeGrid(height, width);
});

// makeGrid now has to take a height and a width
function makeGrid(height, width) {
    // Your code goes here!
    // So if there is a Grid already.. we kill it
    var cell = 0;
    var table = "table" + cell;
    var row = document.getElementById(table);
    while (row !== null) {
        row.remove();
        cell = ++cell;
        table = "table" + cell;
        row = document.getElementById(table);
    }

    // Draw the grid
    var grid = document.querySelector("#pixelCanvas");
    // we could use a for loop here but I like while loops..
    var i = 0;
    var j;
    //  for(var i=0; i<height; i++){
    while (i < height) {
        j = 0;
        // insert the table's row or column
        grid.insertAdjacentHTML("afterbegin", "<tr id = table" + i + "></tr>");
        var column = document.querySelector("#table" + i);
        // for(var f =1; f<width; f++){
        while (j < width) {
            // insert the table's row or column
            column.insertAdjacentHTML("afterbegin", "<td id = cell" + i + j + "></td>");
            j++;
        }
        i++;
    }

    // add an event listener to the grid..for when we click
    document.getElementById('pixelCanvas').addEventListener("click", function () {
        // we grab the color every time a click happens.. just incase user updated the color between a click on the grid.
        color = document.querySelector('#colorPicker').value;
        // what did we click on?
        clickedItem = event.target.id;
        // find the item that was clicked on
        var element = document.getElementById(clickedItem);
        // this just sets the style attribute of the element - so it will create it if it doesnt exist.. and update it if it does exist..
        element.setAttribute("Style", `background-color: ${color};`);

    });

}
