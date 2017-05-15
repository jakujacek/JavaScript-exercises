/**
 * Created by Jacek on 2016-01-12.
 */
var listElements = document.getElementsByClassName("listContainer");
console.log(listElements);
for (var i = 0; i < listElements.length; i++) {
  listElements[i].addEventListener("mouseover", function(){
    for (var j = 0; j <   this.firstElementChild.children.length; j++) {
      this.firstElementChild.children[j].style.backgroundColor = "green";
      this.firstElementChild.firstElementChild.style.backgroundColor = "red";
      this.firstElementChild.lastElementChild.style.backgroundColor = "blue";
    }

  })
}
