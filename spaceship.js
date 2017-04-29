class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    if (this.crew.length > 0) {
      this.docked = false
    } else {
    this.docked = true
    }
    this.phasersCharge = "uncharged"
    for (var i = 0; i < this.crew.length; i++) {
      this.crew[i].currentShip = this
    }
  }
}
