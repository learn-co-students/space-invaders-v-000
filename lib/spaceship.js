'use strict';

function Spaceship(name, crew, phasers, shields) {
  this.name = name,
  this.crew = crew
  this.phasers = phasers,
  this.shields = shields,
  this.cloaked = false,
  this.warpDrive = 'disengaged';
  if (crew.length === 0) {
    this.docked = true;
  } else {
    this.docked = false;
  }
  this.phasersCharge = 'uncharged',
  this.manShip()
}

Spaceship.prototype.manShip = function () {
  var ship = this
  for (var i = 0; i < ship.crew.length; i++) {
    ship.crew[i].currentShip = ship;
  }
};
