

document.addEventListener("DOMContentLoaded", function() {
    var titleElement = document.querySelector(".title");


        function getDataAnimation(givenElement) {
          var value = givenElement.getAttribute("data-animation");
        return value;
       }
       console.log(getDataAnimation(titleElement));

// Zadanie 1

var firstHomeElement = document.getElementById("home");
console.log(firstHomeElement);

var firstHomeElementByQuery = document.querySelector("#home");
console.log(firstHomeElementByQuery);

var listElement = document.querySelector("li:not([data-direction])");
console.log(listElement);

var firstBlockElement = document.getElementsByClassName("block")[0];
console.log(firstBlockElement);

//Zadanie 2
var allListElements = document.querySelectorAll("nav li");
console.log(allListElements, allListElements.length);

var allParagraphElements = document.querySelectorAll("div p");
console.log(allParagraphElements, allParagraphElements.length);

var allDivElements = document.querySelectorAll("article div");
console.log(allDivElements, allDivElements.length);

//Zadanie 3

var articleTag = document.querySelectorAll("article.first");
console.log(articleTag, articleTag.length);

// pkt 3.1
    var resultTagH1 = document.querySelectorAll("article.first h1");
    console.log(resultTagH1.length);

    var resultTagH2 = document.querySelectorAll("article.first h2");
    console.log(resultTagH2.length);

    var ofertsElements = articleTag.querySelectorAll(".oferts");
    console.log("Found", ofertsElements.length, " elements");

    for (var i = 0; i < ofertsElements.length; i++) {
      console.log(ofertsElements[i].length);
    }

    var allDiv = articleTag.querySelectorAll("div");
    console.log(allDiv);

    for (var i = 0; i < allDiv.length; i++) {
      console.log(allDiv[i].className);
    }
});
