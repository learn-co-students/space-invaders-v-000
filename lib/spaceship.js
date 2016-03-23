//spaceship.js
'use strict';

function Spaceship(name, crew, phasers, shields, cloaked, warpDrive, docked, phasersCharge){
  this.name = name;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = cloaked || false;
  this.warpDrive = warpDrive || "disengaged";
  if (crew.length === 0) {
    this.docked = true;
  } else {
    this.docked = false;
    this.crew = crew;
    crew.forEach(function(crewmember){
      crewmember.currentShip = this;
    }, this);
  }
  this.phasersCharge = phasersCharge || "uncharged";
}

