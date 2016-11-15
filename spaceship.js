class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";
    this.docked = true;
    if (crewMembers.length === 0) {
     this.docked = true;
    } else {
     this.docked = false;
    }
    this.setCrew()

  }

  setCrew() {
    this.crew.forEach(crewMember => {
      crewMember.currentShip = this;
    });
  }

}
