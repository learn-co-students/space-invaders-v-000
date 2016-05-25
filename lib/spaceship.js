'use strict';

function Spaceship(name, crew, phasers, shields){
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  this.phasersCharge = 'uncharged';
  this.cloaked = false;
  this.warpDrive = 'disengaged';
  this.updateCrew();
  if (crew.length === 0){
    this.docked = true;
  } else {
    this.docked = false;
  };
}

Spaceship.prototype.updateCrew = function(){
  if (this.crew){
    var spaceship = this;
    this.crew.forEach(function(crewMember){
    crewMember.currentShip = spaceship;
    });
  }
};