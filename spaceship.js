class Spaceship {
  constructor (name, crew, phasers, shields, cloaked = false, warpDrive = 'disengaged') {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    this.docked = this.crew.length === 0 ? true : false
    this.phasersCharge = 'uncharged'
    this.notifyCrew()
  }

  notifyCrew () {
    this.crew.forEach (member => {
      member.currentShip = this
    }
  )
  }
}
