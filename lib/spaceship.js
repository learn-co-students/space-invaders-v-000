function Spaceship (name, crew, numOfPhasers, numOfShieldLayers) {
  this.name = name;
  this.crew = crew;
  this.phasers = numOfPhasers;
  this.shields = numOfShieldLayers;
  this.cloaked = false;
  this.warpDrive = 'disengaged';
  this.docked = function() {
    return !(crew.length > 0);
  };
  this.phasersCharge = 'uncharged';
  this.notifyCrew();
}

Spaceship.prototype.notifyCrew = function(){
  // need to assign this to that `name` isn't called on the window
  var that = this;
  this.crew.forEach(function(crewMember){
    crewMember.currentShip = that;
  });
}
