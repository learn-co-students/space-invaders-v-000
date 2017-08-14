class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.phasersCharge = "uncharged";
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.docked = true;
    if (this.crew.length) {
      this.docked = false;
      this.crew.forEach(member => {
        member.currentShip = this;
      });
    }
  }
}
