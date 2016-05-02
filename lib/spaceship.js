function Spaceship(name, crew, phasers, shields) {
  this.name=name
  this.crew=crew
  this.phasers=phasers
  this.shields=shields
  this.cloaked=false
  this.warpDrive='disengaged'
  this.phasersCharge='uncharged'

  if (this.crew.length === 0){
    this.docked = true
  }else{
    this.assignCrew(crew)
    this.docked=false
  }

}


// KEPT LOSING SCOPE; GOT IMPATIENT
Spaceship.prototype.assignCrew = function(crewArray) {
  
  for (var i = 0; i < crewArray.length; i++){ 
      crewArray[i].currentShip = this 
    }
}

