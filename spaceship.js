class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.docked = true;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.phasersCharge = "uncharged";
    if (crew.length > 0) { 
      this.docked = false;
      for (var i = 0; i < crew.length; i++) {
        crew[i].currentShip = this;
      }
    }
  }
}
