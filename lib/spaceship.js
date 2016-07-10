function Spaceship(name, crew, phasers, shields); {
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = "disengaged";
  if (crew.length = 0){
    this.docked = true;
    this.phasersCharge = "uncharged";
  }else{
    this.docked = false;
    this.phasersCharge = "charged!";
    this.cloaked = true;
  }
}

  Spaceship.prototype.shipWithCrew() {
    this.crew.forEach( var crewMembers in Crew) {
      crewMembers;
    }
    return crewMembers;
  }
