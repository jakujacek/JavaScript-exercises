/*var timeout = setTimeout(function () {
console.log('I will be invoke in 5s');
}, 5000); // 5s

var interval = setInterval(function () {
console.log('I will be invoke every 5s');
}, 5000); // 5s


// Zadanie z wykładowcą
*/

SayHello ();

function SayHello() {
  console.log("Hello");
}

var welcome = function() {
console.log("Siema! :)");
}

welcome();
console.log(welcome);
// Wywołanie funkcji musi nastąpić po

// Zadanie 2
function maxNumber() {
  console.log(Math.max.apply(Math,arguments));
}
console.log(maxNumber(5, 29, 6, 4, 34, 56, 2, 3));

// Zadanie 3

function countHello() {
  var counter = 0;
var interval = setInterval(function(){
  counter += 1;
  console.log("Hello",counter);
  if (counter >= 10) {
    clearInterval(interval);
  }
},1000);
}
countHello();
