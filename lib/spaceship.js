

function Spaceship (name, crew, phasers, shields,  cloaked, warpDrive, phasersCharge, docked) {
  this.name = name;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = cloaked || false;
  this.crew = crew;
  this.warpDrive = warpDrive || "disengaged";
  this.phasersCharge = "uncharged";
  
  if (crew.length === 0) {
    this.docked = true;
    }else {
      this.docked = false;
      var ship = this;
      crew.forEach(function(member) {
        member.currentShip = ship;
      });
  }
}
