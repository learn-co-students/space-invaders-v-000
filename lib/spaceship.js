function Spaceship (name, crew, phasers, shields) {
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  this.warpDrive = "disengaged";
  this.phasersCharge = "uncharged";
  this.cloaked = false;
  this.docked = crew.length > 0 ? false : true;

  this.assignCrew();
}

Spaceship.prototype.assignCrew = function(){
  var instance = this;
  if (this.crew instanceof Array && this.crew.length > 0) {
    this.crew.forEach(function(member){
      member.currentShip = instance;
    });
  };
};