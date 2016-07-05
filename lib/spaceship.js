function Spaceship(name, crew, phasers, shields) {
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = "disengaged";
  this.phasersCharge = "uncharged";
  this.docked = this.crew.length < 1 ? true : false;
  this.boardCrew();
}
Spaceship.prototype.boardCrew = function() {
  var ship = this;
  this.crew.forEach(function(crewMember) {
    crewMember.currentShip = ship;
  });
 };
