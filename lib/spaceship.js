function Spaceship(name, crew, phasers, shields) {
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;

  this.cloaked = false;
  this.warpDrive = 'disengaged';

  if (this.crew.length === 0){ this.docked = true; }
  else { this.docked = false; }

  this.phasersCharge = 'uncharged';

  var thisShip = this; 

  if (this.crew.length > 0) {
    this.crew.forEach(function(member){
      member.currentShip = thisShip;
    });
  }
}