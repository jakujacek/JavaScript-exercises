/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
document.addEventListener("DOMContentLoaded", function(){
  var listElements = document.querySelectorAll("li");
  console.log(listElements);
  var body = document.querySelector("body");
  for (var i = 0; i < listElements.length; i++) {
    listElements[i].addEventListener("click", function(){
      var newDiv = document.createElement("div");
      newDiv.className = "fullScreen";
      var img = document.createElement("img");
      var button = document.createElement("button");
      button.innerHTML = "Close";
      button.className = "close";
      var url = this.firstChild.getAttribute("src");
      img.setAttribute("src", url);
      newDiv.appendChild(img);
      newDiv.appendChild(button);
      body.appendChild(newDiv);
      button.addEventListener("click", function(){
        newDiv.parentNode.removeChild(newDiv);
      });
    });
  }

// przycisk nie byl widoczny na stronie więc
// zmieniłem mu ustawienie w pliku css
});
