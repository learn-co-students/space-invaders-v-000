class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.crew = crew
    this.cloaked = false
    this.warpDrive = 'disengaged'
    if (crew.length === 0) {
      this.docked = true
    } else {
      this.docked = false
    }
    this.phasersCharge = 'uncharged'
    this.callCrew()
  }

  callCrew(){
    this.crew.forEach(member => {
      member.currentShip = this
    })
  }
}