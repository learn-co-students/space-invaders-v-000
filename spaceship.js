class Spaceship {
  constructor(name, crew, numOfPhasers, numOfShields){
    this.name = name
    this.crew = crew
    this.phasers = numOfPhasers
    this.shields = numOfShields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    debugger
    if(crew.length === 0)
      this.docked = true
    else{
      this.docked = false
      for(var index in crew){
        crew[index].currentShip = this
      }
    }
    this.phasersCharge = 'uncharged'
  }
}
