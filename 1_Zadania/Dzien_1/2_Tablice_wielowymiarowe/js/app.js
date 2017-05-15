// Zadanie z wykładowc
function checkArray(givenArray){
  var resultsArray = [];

  for (var i = 0;i<givenArray.length;i++){
    var defaultValue = true;
    for (var j = 0; j<givenArray[i].length;j++){
      if (givenArray[i][j]%2 !== 0){
          defaultValue = false;
      }
    }
    resultsArray.push(defaultValue);
  }
  return resultsArray;
}

var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
          ];

console.log(checkArray(arr));

/*
output

var arrayCheck = [
false, // bo 11
true,
true,
true,
false, // bo 1
];*/

//Zadanie 1



var task1Array = [
                  [2, 3],
                  ["Ala", "Ola"],
                  [true, false],
                  [5, 6, 7, 8],
                  [12, 15, 67]
              ];

console.log(task1Array[3][2]);
console.log(task1Array[1].length);
console.log(task1Array[4][2]);

//Zadanie 2
var task2Array = [
                  [1, 2, 3, 4],
                  [5, 6, 7, 8],
                  [9, 10, 11, 12]
            ];

for (var i = 0; i < 1; i++) {
  console.log(task2Array[0]);
}

for (var i = 0; i < task2Array.length; i++) {
  console.log(task2Array[i].length);
}

for (var i = 0; i < task2Array.length; i++) {
  for (var j = 0; j < task2Array[i].length; j++) {
    console.log(task2Array[i][j]);
  }
}

//Zadanie 3 i 4
function print2Array(tab) {
  for (var i = 0; i < tab.length; i++) {
    for (var j = 0; j < tab[i].length; j++) {
      console.log(tab[i][j]);
    }
  }
}
var sampleArray = [[1,2,3],[1,2,3]];
print2Array(sampleArray);


//Zadanie 5
function create2DArray(row, col) {
  var result2DArray = [];
  var result = 0;
  for (var i = 0; i <row; i++) {
    var rowArray = [];
    for (var j = 0; j<col;j++) {
      result += 1;
      rowArray.push(result);
    }
    result2DArray.push(rowArray);
  }
  return result2DArray;
}

//console.log(create2DArray(0,0));
//create2DArray(1,1);
//create2DArray(4,4);
//console.log(create2DArray(2,16));
//console.log(create2DArray(-4,-4));
