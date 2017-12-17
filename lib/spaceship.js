function Spaceship(name, crew, phasers, shields) {
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = 'disengaged';
  if(crew == 0) {
    this.docked = true;
  } else {
    this.docked = false;
  }
  this.phasersCharge = "uncharged";
  this.notifyCrew();
}

Spaceship.prototype.notifyCrew = function() {
  var self = this;
  this.crew.forEach(function(person) {
    person.currentShip = self;
  });
}