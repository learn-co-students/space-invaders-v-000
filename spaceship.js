class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.phasersCharge = "uncharged"
    this.warpDrive = "disengaged"
    this.crew.length === 0 ? (this.docked = true) : (this.docked = false)

    this.crew.forEach(member => {
      member.currentShip = this;
    });
  };
};
