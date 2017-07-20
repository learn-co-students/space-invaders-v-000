class Spaceship {

  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.phasersCharge = "uncharged";
    this.warpDrive = "disengaged";
    this.docked = this.crew.length == 0 ? true : false;

    for (var crewmember of crew) {
      crewmember.currentShip = this;
    }
  }

}
