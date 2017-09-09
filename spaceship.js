class Spaceship{
  constructor(name, crewMembers, phasers, shields, cloaked = false){
    this.name = name
    this.crewMembers = crewMembers
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked

    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'

    if (this.crewMembers.length > 0){
      this.docked = false
      for (var i = 0; i < this.crewMembers.length; i++) {
        this.crewMembers[i].currentShip = this
      }
    } else
    {
      this.docked = true
    }


  }


}