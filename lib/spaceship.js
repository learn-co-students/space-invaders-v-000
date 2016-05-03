function Spaceship(name, crew, phasers, shields, cloaked){
  this.name = name;
  this.crew = crew
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = "disengaged";
  if (crew.length === 0){
    this.docked = true;
  }else{
    this.docked = false;
  }
  this.phasersCharge = "uncharged";
  this.notifyCrew();
}


Spaceship.prototype.notifyCrew = function(){
  // need to assign this to that `name` isn't called on the window
  var that = this;
  this.crew.forEach(function(crewMember){
    crewMember.currentShip = that;
  });
}
