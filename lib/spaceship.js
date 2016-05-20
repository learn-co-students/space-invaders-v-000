function Spaceship(name, crew, phasers, shields, cloaked = false, warpDrive = "disengaged", phasersCharge = "uncharged") {
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = cloaked;
  this.warpDrive = warpDrive;
  this.docked = (crew.length === 0) ? true : false;
  this.phasersCharge = phasersCharge;

  var ship = this;
  crew.forEach(function(member){
    member.currentShip = ship;
  });

}

// Spaceship.prototype.docked = function (){
//   if (this.crew.length < 1) {
//     this.docked = true;
//   }
// }
