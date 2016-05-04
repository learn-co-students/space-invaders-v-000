function Spaceship(name, crewMembers, phasers, shields, cloaked = false, warpDrive = 'disengaged', docked = true, phasersCharge = 'uncharged'){
  this.name = name;
  this.crewMembers = crewMembers;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = cloaked;
  this.warpDrive = warpDrive;
  this.docked = docked;
  this.phasersCharge = phasersCharge;

  if (crewMembers.length != 0) {
    this.docked = false
    var ship = this
    crewMembers.forEach(function(crewMember){
      crewMember.currentShip = ship;
    });
  }
}