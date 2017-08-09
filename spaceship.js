class Spaceship {
  constructor(name, crew, phasers, shields, cloaked = false, warpDrive = "disengaged", phasersCharge = "uncharged") {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    this.docked = (crew.length === 0)
    this.phasersCharge = phasersCharge

    this.updateCrew()
  }

  updateCrew(crew) {
    if(this.crew.length !== 0) {
      this.crew.forEach((crewMember) => { crewMember.currentShip = this })
    }
  }
}
