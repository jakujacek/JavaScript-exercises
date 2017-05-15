var firstArray = [1,2,3,4,5,6,7];
var secondArray = [1,1,1,1];
var thirdArray = [2,8,3,7];
var ultimateArray = [2,6,9,8,10,1];
console.log(distFromAvarage(firstArray)); //[3,2,1,0,1,2,3]
console.log(distFromAvarage(secondArray)); // [0,0,0,0,]
console.log(distFromAvarage(thirdArray)); // [3,3,2,2]
console.log(distFromAvarage(ultimateArray)); // [4,0,3,2,4,5]

function distFromAvarage(givenArray) {
  var sum = 0;
  var average = 0;
  for (var i = 0; i < givenArray.length; i++) {
    sum = sum + givenArray[i];
  }
  average = sum/givenArray.length;
  var resultArray = [];
  var distance = 0;
  for (var j = 0; j < givenArray.length; j++) {
   distance = givenArray[j] - average;
   resultArray.push(Math.abs(distance));
  }
  return resultArray;
  //console.log(average);

}
//Zadanie 1

var fruitArray = ["mango","orange", "banana"];
var max = '';
for (var i = 0; i < fruitArray.length; i++) {
  if (fruitArray.length -1 === i) {
    console.log(fruitArray[i]);
  }
}

//Zadanie 2


// Zadanie 3

function printTable(array) {
  var spec = 0;
  tab = [];
  for (var i = 0; i < array.length; i++) {
    spec = array[i];
    tab.push(spec);
  }
  return tab;
}
var firstTable = [2,3,4,5,6];
console.log(printTable(firstTable));

// Zadanie 4

function multiply(array) {
  var num = 1;
  for (var i = 0; i < array.length; i++) {
    num *= array[i];
  }
  console.log(num);
}
multiply([1,2,3,4,5,6]);

//Zadanie 5
function getEvenAvarage(arr) {
  var even = 0;
  var sum = 0;
  var average = 0;
  var smallArray = [];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i]%2===0) {
          smallArray.push(arr[i]);
          even = smallArray.length;
          sum += arr[i];
          average = sum/even;
        } if (smallArray.length == 0) {
          average = null;
        }
      }
      return average;
};

console.log(getEvenAvarage([1,2,3,4,5,6,7]));
console.log(getEvenAvarage([2,8,3,7,4]));
console.log(getEvenAvarage([1,1,1,1]));

//Zadanie 6
function sortArray(arr) {
  arr.sort(function(a, b){return a - b});
  return arr;
}
console.log(sortArray([145,11,3,64,4,6,10]));

//Zadanie 7
function addArrays(a,b) {
  var joinArray = [];
  for (var i = 0; i < Math.max(a.length, b.length); i++) {
        joinArray.push((a[i] || 0) + (b[i] || 0));
      }
  console.log(joinArray);
}
addArrays([4,0,1,3,4], [1,9,6,7,8,17]);
addArrays([8,3,22], [1,3,2]);
addArrays([2,3,1,5,3,5], [3,1,76,1]);
