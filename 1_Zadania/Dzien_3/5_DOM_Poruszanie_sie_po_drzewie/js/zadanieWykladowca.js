/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function(){
  var firstChild = document.querySelector(".first").firstElementChild;
  var thirdChild = firstChild.nextElementSibling.nextElementSibling;
  console.log("firstChild", firstChild);
  console.log("thirdChild", thirdChild);

  var secondElement = document.getElementById("second");
  var parentElement = secondElement.parentElement;
  var fourthChildElement = parentElement.children[3];
  console.log(secondElement);
  console.log(parentElement);
  console.log(fourthChildElement);


  var dataExElement = document.querySelector("[data-ex]");
  console.log(dataExElement);
  var grandpaElement = dataExElement.parentElement.parentElement;
  console.log(grandpaElement);
  var lastChild = grandpaElement.lastElementChild;
  var firstChildOfLastElem = lastChild.firstElementChild;
  console.log(lastChild);
  console.log(firstChildOfLastElem);

  var middleChild  = firstChildOfLastElem.children[Math.ceil(firstChildOfLastElem.children.length/2)-1];
  console.log(middleChild);
});
