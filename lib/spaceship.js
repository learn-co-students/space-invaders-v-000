function Spaceship(name, crew, phasers, shields){
  this.name = name;
  this.crew =  crew;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  if (crew.length === 0){
    this.docked = true;
  } else{
    this.docked = false;
  }
  // this.docked = (this.crew.length === 0) ? true : false;
  this.warpDrive = "disengaged";
  this.phasersCharge = "uncharged";
  // assignCrew(crew, this);
  this.notifyCrew();
}

// function assignCrew(crew, ship){
//   crew.forEach(function(member){
//     member.currentShip = ship;
//   });
// }

Spaceship.prototype.notifyCrew = function(){
  var that = this;
  this.crew.forEach(function(member){
    member.currentShip = that;
  });
}