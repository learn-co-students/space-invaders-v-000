'use strict';

function Spaceship (name, crew, phasers, shields) {
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = 'disengaged';
  this.phasersCharge = 'uncharged';
  this.docked = (crew.length === 0) ? true : false;
  this.assignCrew();
}

Spaceship.prototype.assignCrew = function () {
  var that = this;
  this.crew.forEach(function(member){
    member.currentShip = that;
  })
};
