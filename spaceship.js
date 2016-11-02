class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    var dock;
    if (crew.length === 0) {
      dock = true;
    } else {
      dock = false;
    }
    this.docked = dock;
    this.phasersCharge = 'uncharged';
    this.notifyCrew();
  }
  notifyCrew() {
    this.crew.forEach(crewMember => {
      crewMember.currentShip = this;
    });
  }

}
