class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.docked = true;
    this.phasersCharge = "uncharged";

    if (crew.length > 0) {
      this.docked = false;
      this.crew.forEach(person => person.currentShip = this);
    }
  }
}
