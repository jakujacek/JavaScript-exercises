/**
 * Created by Jacek on 2015-12-16.
 */
 document.addEventListener("DOMContentLoaded", function(){
   var mainListElements = document.querySelectorAll(".menu > li");
   var navigation = document.querySelector("div");
   navigation.className = "nav";
   for (var i = 0; i < mainListElements.length; i++) {
     mainListElements[i].addEventListener("mouseover", function(){
       if (this.querySelector("ul") !== null) {
         navigation.classList.remove("nav");
       }

     });
     mainListElements[i].addEventListener("mouseout", function(){
       if (this.querySelector("ul") !== null) {
         navigation.className = "nav";
       }
     });
   }

 });
// przy usunięciu klasy nav usuwa się również stylowanie elementu
// co prowadzi do problemu z rozwinięciem menu
