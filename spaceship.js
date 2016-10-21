class Spaceship {
  constructor(name, crew, phasers, shields, cloaked = false, warpDrive = "disengaged", phasersCharge = "uncharged") {
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.crew = crew;
    this.cloaked = cloaked;
    this.warpDrive = warpDrive;
    this.phasersCharge = phasersCharge;
    if (crew.length === 0) {
      this.docked = true;
    } else {
      this.docked = false;
    }
    this.notifyCrew();
  }

  notifyCrew() {
    this.crew.forEach(member => {
      member.currentShip = this;
    });
  }
}
