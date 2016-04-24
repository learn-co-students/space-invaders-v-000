function Spaceship (name, crew, phasers, shields, cloaked, warpDrive, phasersCharge){
  this.name = name
  this.crew = crew
  this.phasers = 5
  this.shields = 4
  this.cloaked = false
  this.warpDrive = "disengaged"
  this.phasersCharge = "uncharged"
  
  if (crew.length === 0){
    this.docked = true;
  } else {
    this.docked = false;
  }

  var self = this;
  crew.forEach(function(member) {
    member.currentShip = self;
  });


}



