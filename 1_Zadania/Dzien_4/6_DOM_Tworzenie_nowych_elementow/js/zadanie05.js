/**
 * Created by Jacek on 2016-01-12.
 */

 const list1 = document.getElementById("list1")
 const list2 = document.getElementById("list2")

 const moveList = function(e) {
   if (e.target.matches(".moveBtn")) {
     e.preventDefault()
     const item = e.target.parentNode
     const parent = item.parentNode
     parent.removeChild(item)
     if (parent === list1) {
       list2.appendChild(item)
     }
     else {
       list1.appendChild(item)
     };
   };
 };
window.addEventListener("click", moveList, false)
