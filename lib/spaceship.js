function Spaceship(name, crew, phasers, shields){
  this.name = name;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = 'disengaged';
  this.phasersCharge = 'uncharged';
    this.crew = crew;
  if (crew.length === 0){
    this.docked = true;
  }else{
    this.docked = false;
  }
  this.notifyCrew();


}

Spaceship.prototype.notifyCrew = function(){
  var me = this;
  this.crew.forEach(function(crewMember){
    crewMember.currentShip = me;
  });
}
