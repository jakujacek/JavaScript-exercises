// ładne:
var parentElements = document.querySelectorAll(".parent");
console.log(parentElements);


    function showChildrenElements(){
        this.children[0].style.display = "block";
    }
    function hideChildrenElement(){
           this.children[0].style.display = "none";
    }
    for(var i =0;i<parentElements.length;i++){
    parentElements[i].addEventListener("mouseover",showChildrenElements);
    parentElements[i].addEventListener("mouseout", hideChildrenElement);
  }
