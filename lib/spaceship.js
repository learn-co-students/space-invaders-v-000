function Spaceship(name, crew, phasers, shields, cloaked, warpDrive, docked, phasersCharge){
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = cloaked || false;
  this.warpDrive = warpDrive || "disengaged";
  this.phasersCharge = phasersCharge || "uncharged";
  if (this.crew.length < 1) {
    this.docked = true;
  } else {
    this.docked = false;
  };

  var self = this;
  crew.forEach(function(member){
    member.currentShip = self;
  });
}