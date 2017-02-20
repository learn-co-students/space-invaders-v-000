'use strict';
class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.docked = crew.length === 0 ? true : false;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";
    this.setCrew();
  }

  // Sets the ship for each crew member.
  setCrew() {
    this.crew.forEach(crewMember => {
      crewMember.currentShip = this;
    });
  }
}