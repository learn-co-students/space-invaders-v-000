class Spaceship {
  constructor(name, crews, phasers, shields) {
    this.name = name;
    this.crews = crews;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    if (this.crews.length === 0) {
      this.docked = true;
    } else {
      this.docked = false;
    }
    this.phasersCharge = "uncharged";
    this.notifyCrew();
  }

  notifyCrew() {
    this.crews.forEach(crew => {
      crew.currentShip = this;
    })
  }
}
