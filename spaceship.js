class Spaceship {
  constructor(name, crew, phasers, shields, cloaked = false, warpDrive = "disengaged") {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = cloaked;
    this.warpDrive = warpDrive;
    if (this.crew < 1) {
      this.docked = true;
    } else {
      this.docked = false;
    }
    this.phasersCharge = "uncharged";
    this.crewShip();
  }

  crewShip() {
    this.crew.forEach(member => {
      member.currentShip = this;
    });
  }
}
