function Spaceship(name, crewMembers, phasers, shields) {
  this.name = name;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = 'disengaged';
  this.phasersCharge = 'uncharged';

  if (crewMembers.length === 0)
    this.docked = true;
  else 
    this.docked = false;

    crewMembers.forEach(function(crewMember) {
      crewMember.currentShip = this;
    }, this);
}