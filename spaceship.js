class Spaceship {
  constructor (name, crew, phasers, shields) {
    this.name = name
    this.crew = crew;
    this.updateCrew(this.crew);
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.docked = crew.length > 0 ? false : true;
    this.phasersCharge = 'uncharged';
  }

  chargePhasers() {
    this.phasersCharge = 'charged!';
    debugger;
  }

  updateCrew(crew) {
    var i;
    for (i = 0; i < crew.length; ++i) {
      crew[i].currentShip = this;
    }
  }
}
