class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";
    if (crew.length > 0) {
      this.docked = false;
      var ship = this;
      crew.forEach(function (crewMember) {
        crewMember.currentShip = ship;
      });
    } else {
      this.docked = true;
    }
  }
}
