
function Spaceship(name, crew, phasers, shields) {
  this.name = name;
  this.phasers = phasers;
  this.phasersCharge = 'uncharged';
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = 'disengaged';
  this.crew = crew;
  if(crew.length === 0) {
    this.docked = true;
  } else {
    this.docked = false;
  }
  this.setCrew();
}

Spaceship.prototype.setCrew = function() {
  var ship = this;
  this.crew.forEach(function(crewMember){
    crewMember.currentShip = ship;
  });
}
