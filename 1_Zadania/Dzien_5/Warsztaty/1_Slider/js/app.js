/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener("DOMContentLoaded", function(){
  var buttonNext = document.getElementById("nextPicture");
  var buttonPrev = document.getElementById("prevPicture");
  var allListImages = document.querySelectorAll("li");

  var indexOfPicture = 0;

    allListImages[indexOfPicture].classList.add("visible");

buttonNext.addEventListener("click", function(e){
  allListImages[indexOfPicture].classList.remove("visible");
  if (indexOfPicture === allListImages.length -1) {
    indexOfPicture = -1;
  }
  indexOfPicture++;
  allListImages[indexOfPicture].classList.add("visible");
});
buttonPrev.addEventListener("click", function(){
  allListImages[indexOfPicture].classList.remove("visible");
    indexOfPicture--;
  if (indexOfPicture < 0) {
    indexOfPicture = allListImages.length -1;
  }
  allListImages[indexOfPicture].classList.add("visible");

});

});
