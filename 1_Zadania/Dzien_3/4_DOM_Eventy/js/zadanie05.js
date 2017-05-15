/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function(){

  var boxElements = document.querySelectorAll(".box");
  var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  for (var i = 0; i < boxElements.length; i++) {
      boxElements[i].addEventListener("click", function(event){
      this.style.backgroundColor = randomColor;
  });
}
});
