  /**
   * Created by Jacek on 2016-01-12.
   */



  function generateArray(number){
  var array = [];
   for (var i = 0; i < number; i++) {
     array[i] = Math.floor(Math.random()*100)+1;
   }
   console.log(array);
   return array;
  }


  function maxValue(array) {
      array.sort(function(a,b){return a-b});
      console.log(array[array.lenght-1]);
  }
  maxValue(generateArray(15));

  function topThreeValues(array) {
    array.sort(function(a,b){return b-a});
    console.log(array);
    console.log(array[0],array[1],array[2]);
    return array[0], array[1], array[2];
  }

  topThreeValues(generateArray(15));



//Zadanie dzien 2
