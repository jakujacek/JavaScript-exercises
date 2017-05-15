/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function(){

  var menu = document.querySelector("#menu");
  var paragraf = document.querySelector("p");

  menu.classList.add("menu");
  paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
// Po przeniesieniu wywołania js nic sie nie zmieniło
// jest tak ponieważ js dołącza się dopiero gdy document HTML jest załadowany
});
