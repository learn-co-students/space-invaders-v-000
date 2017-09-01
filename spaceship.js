class Spaceship {
  constructor(name, crew, phasers, shields,cloaked = false) {
    this.name = name;
    this.crew = crew;  //order matters because this will be an array (forEach)
    this.phasers = phasers;
    this.shields = shields


    this.cloaked = cloaked;
    this.warpDrive = "disengaged";

    if (crew.length === 0) {
      this.docked = true;
    } else {
      this.docked = false;
    }

    this.phasersCharge = "uncharged";
    this.notifyCrew();

  }

  notifyCrew(crew) {
    if (this.crew.length !== 0) {
      this.crew.forEach(crewMember => {
        crewMember.currentShip = this;
    });

    }
  }

}
