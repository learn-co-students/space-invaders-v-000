class Spaceship {
  constructor(name, crews, phasers, shields) {
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.crews = crews;
    if (crews.length == 0) {
      this.docked = true;
    }
    else {
      this.docked = false;
      for (var i = 0; i< crews.length; i++) {
        crews[i].currentShip = this;
      }
    }
    this.phasersCharge = "uncharged";
  }
}
