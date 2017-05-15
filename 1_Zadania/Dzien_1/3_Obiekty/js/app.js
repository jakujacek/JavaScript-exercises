//cwiczenia z obiektami i "this"

var Car = function(type,hp,color) {
  this.type = type;
  this.hp = hp;
  this.color = color;
  this.getInfo = function() {
    console.log("Metryczka ", this.type, this.hp,this.color);
  }
};

var fiat = new Car('fiat',125,'blue');
var fiat2 = new Car('fiat2',125,'blue2');

fiat2.getInfo();

//Zadanie 1

var book = {
  title: "Nudna książka",
  author:"Gall Nuudziarz",
  numberOfPages: 300
};

//console.log(book.title,book.author,book.numberOfPages);
function Book(title,author,numberOfPages,volumes) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.volumes = volumes;
    this.getInfo = function () {
      console.log(this.title,this.author,this.numberOfPages,this.volumes);
    }
};
var book1 = new Book("Gra o Tron", "George R.R.Martin",800,6);
var book2 = new Book("Nudna książka", "Gall Nuudziarz",300);
book1.getInfo();
book2.getInfo();

// Zadanie z wykładowcą

String.prototype.upperLower = function() {
  var resultString = "";
  for (var i = 0; i < this.length; i++) {
    //  console.log(this[i]);
    if (i%2!==0) {
      resultString += this[i].toUpperCase();
    } else {
      resultString += this[i].toLowerCase();
    }
  }
    return resultString;
}
var start = "Smiesznie";
var funnyText = "Smiesznie".upperLower();
console.log(funnyText);
var funnyTextWithSpace = "Javascript jest super".upperLower();
console.log(funnyTextWithSpace);




//Zadanie 2
var person = {
  name: "Jurek",
  age: 43,
  sayHello: function(){
    console.log("Hello");
  }
}
console.log(person.name,person.age,person.sayHello());

//Zadanie 3
var train = new Object();
  train.name = "marklin";
  train.hp = 100;
  train.getSound = function() {
    console.log("tryt tryt tryt");
  }
console.log(train.instanceof);//zwraca undefined

// Zadanie 4
var Car = {
  brand: "mercedes",
  color: "red",
  numberOfKilometers: 0,
  printCarinfo: function() {
    return this.brand + this.color + this.numberOfKilometers;
  },
  drive: function(km) {
    return this.numberOfKilometers += km;
  }

}
console.log(Car.printCarinfo());
Car.drive(100);
console.log(Car.printCarinfo());
//Zadanie 5


Car.checkarr = [" 2013-03-31","2014-05-24","2015-02-26"];
Car.printCarinfo = function() {
return this.brand + this.color + this.numberOfKilometers + this.checkarr;
}

console.log(Car.printCarinfo());
//Prototypy

function Human(givenName, givenAge) {
  this.name = givenName;
  this.age = givenAge;
  this.getAge = function(){
    console.log(this.age);
}
}

Human.prototype.getAge = function() {
console.log(this.age);
}

var male = new Human("Janusz", 29);
//male.getAge();


var female = new Human("Maria", 31);
female.getAge = function() {
 console.log(18);
}

Human.prototype.getAge = function() {
console.log(this.age + 5);
}

// Zadanie 9

var Rectangle = function(width, height) {
  this.width = width;
  this.height = height;
  this.area = this.getArea();
  this.perimiter = this.getPerimiter();
}

Rectangle.prototype.getArea = function() {
  return this.width * this.height;
}
Rectangle.prototype.getPerimiter = function() {
  return (2 * this.width) + (2 * this.height);
}

var rectangle1 = new Rectangle(5,4);
console.log(rectangle1);
