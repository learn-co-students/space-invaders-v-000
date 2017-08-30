class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    if (crew.length > 0) {
      this.docked = false
      this.crew = crew
      for (var i in crew) {
        crew[i].currentShip = this
      }
    } else {
      this.docked = true
      this.crew = []
    }
    this.phasersCharge = "uncharged"
  }
}
