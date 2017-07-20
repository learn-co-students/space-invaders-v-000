class Spaceship {

  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    if (crew.length === 0) {this.docked = true}
    else {
      this.docked = false
      for (let i = 0, l = crew.length; i < l; i++) {
        crew[i].currentShip = this;
      }
    }
    this.phasersCharge = 'uncharged';
  }

  //methods

}
