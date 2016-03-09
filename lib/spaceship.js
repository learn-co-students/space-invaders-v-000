function Spaceship(name,crew,phasers,shields){
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  if(this.crew.length === 0){
    this.docked = true
  }
  else{
    this.docked = false;
  }
  this.warpDrive = 'disengaged';
  this.phasersCharge = 'uncharged';
  this.updateCrew();
}

Spaceship.prototype.updateCrew = function(){
  var ship = this;
  this.crew.forEach(function(crewMember){
    crewMember.currentShip = ship;
  });
}