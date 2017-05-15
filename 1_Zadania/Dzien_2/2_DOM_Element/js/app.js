/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

// Zadanie z wykładowcą

function getDatasInfo(elements) {
var dataValuesArray = [];
for (var i = 0; i < elements.length; i++) {
  dataValuesArray.push(elements[i].dataset.color);
}

return dataValuesArray;
}

console.log(getDatasInfo(links));

//Zadanie 1
    console.log(homeElement, homeElement.tagName, homeElement.className, homeElement.length);
    console.log(childElements, childElements.tagName, childElements.className, childElements.length);
    for (var i = 0; i < childElements.length; i++) {
      console.log(childElements[i]);
    }
    console.log(banner, banner.tagName, banner.className, banner.length);
    console.log(blocks, blocks.tagName, blocks.className, blocks.length);
    for (var i = 0; i < blocks.length; i++) {
      console.log(blocks[i]);
    }
    console.log(links, links.tagName, links.tagName,links.length);
    for (var i = 0; i < links.length; i++) {
      console.log(links[i]);
    }


//Zadanie 2
for (var i = 0; i < blocks.length; i++) {
  console.log(blocks[i].innerHTML);
}
for (var i = 0; i < blocks.length; i++) {
  console.log(blocks[i].outerHTML);
  blocks[i].innerHTML = "Nowa wartość diva o klasie blocks";// nowa wartość przypisani
}



// Zadanie 3

var idMainFooter = document.querySelector("#mainFooter");
console.log(idMainFooter);

function getId(element) {

  return element.tagName;
}

console.log(getId(idMainFooter));


// Zadanie 4

function getTags(elements) {
  var childArray = [];
  for (var i = 0; i < elements.length; i++) {
    childArray.push(elements[i].tagName);
  }
  return childArray;
}
console.log(getTags(childElements));

// Zadanie 5

function getClassInfo(element) {
  return element.classList;
}


console.log(getClassInfo(banner));


// Zadanie 6

/* var allListNavElements = document.querySelectorAll("nav li");
console.log(allListNavElements);
function setDataDirection(elements) {
  for (var i = 0; i < elements.length; i++) {
    if (elements[i]:not.data-direction)) {
      return elements.data-direction = "top";
    }
  }
}
console.log(setDataDirection(allListNavElements));
*/
});
