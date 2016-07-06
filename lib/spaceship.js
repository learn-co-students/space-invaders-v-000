'use strict';

function Spaceship(name, crew,phasers,shields) {
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  debugger;
  this.docked = (this.crew.length === 0 ? true : false);
  this.warpDrive = 'disengaged';
  this.phasersCharge = 'uncharged';

  if (this.crew.length > 0){
    var ship = this;
    this.crew.forEach(function(member) {
      member.currentShip = ship;
    });
  }
}
