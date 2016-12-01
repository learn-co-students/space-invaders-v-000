class Spaceship {
  constructor(name, crew, phasers, shields) {
    // var currentSpaceShip = this
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged';
    this.crew.forEach(function(crewMember) {
      crewMember.currentShip = this;
    }, this)

    if (this.crew.length === 0) {
      this.docked = true;
    } else {
      this.docked = false;
    }

  }
}
