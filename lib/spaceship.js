function Spaceship(name, crew, phasers, shields) {
  this.name = name;
  this.crew = crew;
  this.shields = shields;
  this.phasers = phasers;
  this.cloaked = false;
  this.warpDrive = "disengaged";
  if (crew == 0) {
    this.docked = true;
  } else {
    this.docked = false;
  }
  this.phasersCharge = "uncharged";
  this.crewGo();
}

Spaceship.prototype.crewGo = function() {
  var crewGo = this;
  this.crew.forEach(function(astro){
    astro.currentShip = crewGo;
  });
}
