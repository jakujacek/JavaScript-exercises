/**
 * Created by Jacek on 2016-01-12.
 */
var buttonElement = document.querySelector(".button");
var listTable = document.querySelector(".menu");


buttonElement.addEventListener("click", function(){
    var liElem = document.createElement("li");
    listTable.appendChild(liElem);
    listTable.lastElementChild.innerHTML = listTable.children.length - 1;
});
