class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'
    this.crew = crew
    this.crew.length === 0 ? this.docked = true : this.docked = false

    for (var crewMember in this.crew) {
      this.crew[crewMember].currentShip = this
    }
  }
}
