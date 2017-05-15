/**
 * Created by Jacek on 2015-12-16.
 */


/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener("DOMContentLoaded", function(){
  console.log("działa");
  var tooltip = document.querySelectorAll(".tooltip");
  console.log(tooltip);

  for (var i = 0; i < tooltip.length; i++) {
    tooltip[i].addEventListener("mouseover", function(){
      var span = document.createElement("span");
      span.className = "tooltipText";
      span.innerHTML = this.dataset.text;
      this.appendChild(span);
    });

    tooltip[i].addEventListener("mouseout", function(){
      var span2 = document.querySelector(".tooltip span");
      span2.parentNode.removeChild(span2);
    });
  }
});
