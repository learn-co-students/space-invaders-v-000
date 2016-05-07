function Spaceship(name, crew, phasers, shields) {
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = "disengaged";
  this.phasersCharge = "uncharged";
  if (this.crew.length === 0) {
    this.docked = true
  } else {
    this.docked = false
    this.addCrew();
  }
}

Spaceship.prototype.addCrew = function() {
  var ship = this;
  $.each(this.crew, function(index, member) {
    member.currentShip = ship
  });
}


