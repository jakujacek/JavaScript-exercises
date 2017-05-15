/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){

    var chromeElement = document.querySelector(".chrome");
    console.log(chromeElement);
    chromeElement.style.width = "100px";

    var firefoxElement = document.querySelector(".firefox");
    firefoxElement.style.backgroundImage = "url(assets/img/firefox.png)";

    var edgeElement = document.querySelector(".edge");
    edgeElement.style.backgroundImage = "url(assets/img/edge.png)";

    var linkFirefox = document.querySelector(".firefox~a");
    linkFirefox.setAttribute("href","http://firefox.com");
    linkFirefox.innerText = "Firefox";

    var linkChrome = document.querySelector(".chrome~a");
    linkChrome.innerText = "Chrome";

// Zadanie 2

 var nameElem = document.getElementById("name");
 var favColorElem = document.getElementById("fav_color");
 var favMealElem = document.getElementById("fav_meal");

 nameElem.innerHTML = "Janusz";
 favColorElem.innerHTML = "koperkowy";
 favMealElem.innerHTML = "Kopytko";



//Zadanie 3
var setMenuClass = document.querySelector(".ex3 ul");
setMenuClass.classList.toggle("menu");


var allLiElem = document.querySelectorAll("li");
for (var i = 0; i < allLiElem.length; i++) {
 allLiElem[i].classList.remove("error");
 allLiElem[i].classList.add("menuElement");
}

// Zadanie 4




});
