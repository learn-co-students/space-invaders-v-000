class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.crew = crew
    this.phasersCharge = 'uncharged'

    if (crew[0] === undefined) {
      this.docked = true
    }
    else {
      this.docked = false
    }

    var spaceshipObject = this
    if (crew[0]) {
      crew.forEach(function(crew) {
        crew.currentShip = spaceshipObject
      })
    }

    

  }//constructor close



}
