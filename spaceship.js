class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';

    this.docked = (function() {
      if (crew.length === 0) {
        return true;
      } else {
        return false;
      }
    })();

    this.phasersCharge = 'uncharged';
    this.assignCrew();
  }

  assignCrew() {
    this.crew.forEach(CrewMember => {
      CrewMember.currentShip = this;
    })
  }
}
