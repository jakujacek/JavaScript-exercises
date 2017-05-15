var Robot = function(name, robotNumbe) {
  this.robotNumber = robotNumber;
  this.name = name;
  this.isFunctional = true;
  this.changeName("Cat" + this.robotNumber);
}

Robot.prototype.sayHi = function(toWho) {
  if(this.isFunctional === true){
    console.log("Robot " + this.name + " greets " + toWho);
  }
  else{
    console.log("Robot " + this.name + "is broken");
  }
};

Robot.prototype.changeName = function(newname) {
  console.log("Robot " + this.name + "changes name to " + newname);
  this.name = newname;
  console.log(this.name);
};

Robot.prototype.fixIt = function() {
  this.isFunctional = true;
  console.log("Robot " + this.name + "was fixed");
};

var robots = [],
numberOfRobots = 5;
for (var i=0; i< numberOfRobots; i++) {
  var robot = new Robot('Robot' + (i+1), (i+1));
  robots.push(robot);
}

console.log(robots);
robots[0].sayHi("Jacek");
robots[0].changeName("Brudas");

//Zadanie 6

var Bird = function(type, name) {
  this.type = type;
  this.name = name;
  this.getType();
}

Bird.prototype.getType = function() {
  console.log(this instanceof Object);
}

var bird1 = new Bird("predator", "cwirek");

// Zadania 7

var myString = "W pewnej norze ziemnej";
console.log(myString.instanceof);

var myNumber = 7;
console.log(myNumber.instanceof);

//Zadania 8
