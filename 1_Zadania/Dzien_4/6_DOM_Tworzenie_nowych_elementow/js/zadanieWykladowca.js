/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function(){


var newDiv = document.createElement("div");
console.log(newDiv);

var deleteButtons = document.getElementsByClassName("deleteBtn");
console.log(deleteButtons);

for(var i=0;i<deleteButtons.length;i++){
  deleteButtons[i].addEventListener("click",function(){
    var toErase = this.parentElement.parentElement;
    toErase.parentNode.removeChild(toErase);
  });
}
 });
