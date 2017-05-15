/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener("DOMContentLoaded", function(){
  var images = document.getElementsByTagName("img");
  var hideBtn = document.getElementById('hideButton');
  var showBtn = document.getElementById('showButton');
  var mainInput = document.getElementById('tagInput');


  hideBtn.addEventListener("click", function(){
    var inputValue = mainInput.value;
    mainInput.value = "";
    for (var i = 0; i < images.length; i++) {
      if (images[i].dataset.tag.indexOf(inputValue) !== -1) {
        images[i].className = "invisible";
    }else if (images[i].dataset.tag.indexOf(inputValue) == -1) {
      images[i].classList.remove("invisible");
    }
    }
  });
  showBtn.addEventListener("click", function(){
    inputValue = mainInput.value;
    for (var j = 0; j < images.length; j++) {
    if (images[j].dataset.tag.indexOf(inputValue) !== -1) {
      images[j].classList.remove("invisible");
    } else if (images[j].dataset.tag.indexOf(inputValue) == -1) {
      images[j].classList.add("invisible");
    }
    }
  });

});
// wprzypadku gdy nic nie jest wpisane i da się hide
// chowa się wszystko, i na odwrót tak samo jest z show
