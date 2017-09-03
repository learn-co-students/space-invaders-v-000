class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.crew = crew;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.docked = this.docked();
    this.phasersCharge = "uncharged";
    this.notifyCrew();
  }

  notifyCrew(){
    for (let i = 0; i < this.crew.length; i++) {
      this.crew[i].currentShip = this;
    }
  }

  docked(){
    if (this.crew.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}
