// --- ES6 Classes style ---
class Horse {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }

  run() {
    this.speed++;
  }

  runMore() {
    this.speed += 3;
  }
}

class Meara extends Horse {
  constructor(name, color) {
    super(name);

    // Extending properties
    this.color = color;

    // Overriding properties
    this.speed = 5;
  }

  // Extending methods
  speak() {
    // ...
  }

  // Overriding methods
  run() {
    this.speed += 3;
  }
}

class SuperMearaDivineOfTheDeath extends Meara {
  constructor(name, color) {
    super(name, color);

    this.speed = 50;
  }
}

// Initialize stuff

let horses = [];
let choose = 2;

// Instantiating objects

horses.push(new Horse("Babieca"));

if (choose == 1) {
  horses.push(new Meara("Sombragrís", "Blanco"));
}
else
if (choose == 2) {
  horses.push(new SuperMearaDivineOfTheDeath("GoDHorse", "Blanco"));
}
else {
  horses.push(new Horse("Sombragrís"));
}

// Run processes

horses[0].run();
horses[1].run();

// Get results

if (horses[0].speed < horses[1].speed) {
  console.log("Gana el caballo 1");
} else
if (horses[0].speed == horses[1].speed) {
  console.log("Empate");
}
else {
  console.log("Gana el caballo 2");
}
