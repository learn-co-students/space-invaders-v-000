function Spaceship(name, crew, phasers, shields){
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = 'disengaged';
  this.docked = this.crew.length < 1 ? true : false;
  this.phasersCharge = 'uncharged';
  this.engageMembers();
}

Spaceship.prototype.engageMembers = function() {
  var ship = this;
  this.crew.forEach(function(member) {
    member.currentShip = ship;
  });
};
