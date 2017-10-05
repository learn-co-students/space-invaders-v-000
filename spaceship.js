class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    if (crew.length == 0) {
      this.docked = true;
    } else {
      this.docked = false;
    }
    this.phasersCharge = "uncharged";
    for (var i = 0; i < crew.length; i++) {
      crew[i].currentShip = this
    }
  }

  sayHello() {
    console.log("Hello, my name is "+ this.name);
  }
}
