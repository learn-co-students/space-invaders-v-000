class Spaceship {

  constructor(name, crew, phasers, shields) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields

    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.docked = crew.length < 1
    this.phasersCharge = 'uncharged'

    for (var i = 0; i < crew.length; i++) {
      crew[i].currentShip = this
    }
  }
}