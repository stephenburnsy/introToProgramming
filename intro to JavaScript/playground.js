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

