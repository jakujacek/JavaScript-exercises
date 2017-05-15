
document.addEventListener("DOMContentLoaded", function(){

function generateArray(number) {
  var array = [];
  for ( var i = 0; i < number ; i++) {
    array[i] = Math.floor(Math.random()*100)+1;
  }
  //console.log(array);
  return array;
};

function maxValue(array) {
    array.sort(function(a, b){return a-b});
    console.log(array[array.length -1]);

  }

//maxValue(generateArray(15));


function topThreeValues(array){
  array.sort(function(a, b){return b-a});
  console.log(array);
  console.log(array[0],array[1],array[2]);
  return array[0]+array[1]+array[2];
}

topThreeValues(generateArray(15));

////////////////////////

var title = document.querySelector(".title");
console.log(title);

function getDataAnimation(element) {
    //   var result =  element.getAttribute("data-animation");
    var result = element.dataset.animation;
    return result;
}

console.log(getDataAnimation(title));
//wcczytaj wszytskie divy do zmiennej
//i wyświetl ich klasę - i wyświetl

var allDivs = document.querySelectorAll("div");

for (var i = 0; i < allDivs.length; i++) {
    console.log(allDivs[i].className);
}


// znajdź wszytskie elementy o klasie oferts
//stwórz funkcję getElementsTag(elements) wyświetlającą
// tagi przekazanych do niej elementów

var allOferts = document.getElementsByClassName("oferts");

function getElementsTag(elements) {
    for (var i = 0; i < elements.length; i++) {
        console.log(elements[i].tagName);
    }
};

getElementsTag(allOferts);






});
