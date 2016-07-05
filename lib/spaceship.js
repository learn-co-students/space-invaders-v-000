function Spaceship(name, crew, phasers, shields){
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = "disengaged";
  this.docked = this.crew.length == 0;
  this.phasersCharge = "uncharged"
  var thisShip = this
  this.crew.forEach(function(crewMember){
    crewMember.currentShip = thisShip;
  });
}

