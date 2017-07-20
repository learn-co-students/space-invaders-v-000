class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    if (this.crew.length < 1) {
      this.docked = true
    } else {
      this.docked = false
    }
    this.phasersCharge = 'uncharged'
    this.enterCrew()
  }

  enterCrew() {
    if (this.crew.length > 0) {
      for (let i = 0; i < this.crew.length; i++) {
        this.crew[i].currentShip = this
      }
    }
  }
}
