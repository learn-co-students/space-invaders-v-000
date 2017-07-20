class Spaceship {
  constructor(name, crew, phasers, shields){
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    if(crew.length > 1){
      this.docked = false
    }else{
      this.docked = true
    }
    this.phasersCharge = "uncharged"
    this.assignCrewMemberToShip()
  }

  assignCrewMemberToShip(){
    this.crew.forEach(function(crewMember) {
      crewMember.currentShip = this
    }, this);
  }


}
