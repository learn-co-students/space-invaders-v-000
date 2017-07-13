class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew.map((c) => c.currentShip = this);
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.docked = this.crew.length == 0;
    this.phasersCharge = 'uncharged';
  }
}