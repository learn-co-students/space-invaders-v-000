function Spaceship(name, crew, phasers, shields) {
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = 'disengaged';
  //debugger;
  this.docked = (crew.length === 0) ? true : false;


  this.phasersCharge = 'uncharged';

  var self = this;
  crew.forEach(function(member) {
    //debugger;
    member.currentShip = self;
  })
}
