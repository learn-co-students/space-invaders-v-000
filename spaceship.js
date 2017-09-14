class Spaceship {
  constructor (name, crew, phasers, shields) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"
    this.docked = (this.crew.length === 0)? true : false
    this.crew.forEach(function(element) {
      element.currentShip = this;
    }, this);
  }
}
