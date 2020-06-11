// Playing around in the browsers console
document.body.addEventListener('click', function () {
     var myParent = document.getElementsByTagName("h1")[0]; 
     var myImage = document.createElement("img");
     myImage.src = 'https://thecatapi.com/api/images/get?format=src&type=gif';
     myParent.appendChild(myImage);
     myImage.style.marginLeft = "160px";
});

// function to do something
function createDiv(){
    // create an element 
    var elem = document.createElement('div');
    // Set the elements id
    elem.setAttribute('id', 'myEle');
    // Append the new div to the dom
    document.body.appendChild(elem);
}

// function to return something
function returnDiv(){
    var newDiv;
    newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'newDiv');
    return newDiv;
}

// log some shiz
var x = returnDiv();
console.log("What have i done: ", x);

// return a tuple 
function color(r,g,b) {
    var color = {red: r, green: g, blue: b}
    return color;
}

// a map.. is an array that goes on a journey..
// we take in an array.. transmute it.. and the result comes out..
// an array of peoples energie levels.
var arr = [100,75,75,100];
// lets say these people excersize.. their energy will go down right?
var exercizeArr = arr.map(function (energy){
    energy = energy-20;
    return energy;
});
// the values will now be reduced by 20.. as we excersized a bit.
console.log(exercizeArr);


// 2 dimetional arrays
var twoArr =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// js object
var person= {
 name: "john",
 age: 25,
}