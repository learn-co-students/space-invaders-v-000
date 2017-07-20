class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.docked = (crew.length === 0) ? true : false
    this.phasersCharge = 'uncharged';
    this.notifyCrew();
  }

  notifyCrew() {
    var thisShip = this;
    this.crew.forEach(function(crewMember) {
      crewMember.currentShip = thisShip;
    });
  }
}
