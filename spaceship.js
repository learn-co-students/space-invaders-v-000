class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged'
    if (!crew.length) {
      this.docked = true;
    } else {
      this.docked = false;
      this.crew = crew;
      for (let i = 0; i < crew.length; i++) {
        crew[i].currentShip = this;
      }
    }
    this.phasersCharge = 'uncharged';
  }

}
