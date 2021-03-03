// --- Constructor function style ---

function Horse(name) {
  let speed = 0;

  this.name = name;

  // Getters
  this.getSpeed = function () {
    return speed;
  }

  this.run = function () {
    speed++;

    return "Corre, caballito!!";
  }

  this.runMore = function () {
    speed += 3;

    return "Como el viento!!";
  }
}

function Meara(name) {
  this = new Horse(name);

  this.clan = "Rohirrim";

  this.run = function() {
    speed += 5;
  }

  this.speak = function() {
  }
}

let horses = [];

horses.push( new Horse("Babieca") );

console.log(horses[0].name); // "Babieca"
console.log(horses[0].run());
console.log(horses[0].runMore());
console.log(horses[0].getSpeed()); // 4 

horses.push( new Horse("Rocinante") );

horses[1].run();
horses[1].run();

console.log(horses[1].getSpeed()); // 2

if( choose == 1 ) {
  horses.push(new Meara("Sombragrís"));
}
else {
  horses.push(new Horse("Sombragrís"));
}

horses[2].run();



// --- Object literal style ---

const otherHorse = {
  name: "Flower Power III",
  lifePoints: 10,
  smoke: function () {
    this.lifePoints--;
  }
};

otherHorse.smoke();
otherHorse.lifePoints; // 9

