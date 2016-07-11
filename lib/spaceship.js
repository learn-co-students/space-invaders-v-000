function Spaceship(name, crew, phasers, shields) {
  this.name = name;
  this.crew = crew;
  this.phasers = 5;
  this.shields = 4;
  this.cloaked = false;
  this.warpDrive = 'disengaged';
  if (crew.length === 0) {
    this.docked = true;
  } else {
    this.docked = false;
    this.setCrew();
  };
  this.phasersCharge = 'uncharged';
}

Spaceship.prototype.chargePhasers = function () {
  this.phasersCharge = 'charged!';
};

Spaceship.prototype.setCrew = function () {
  for (var i = 0; i < this.crew.length; i++) {
    this.crew[i].currentShip = this;
  }
};
