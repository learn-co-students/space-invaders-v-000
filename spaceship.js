class Spaceship {
  constructor(name, crewMembers, phasers, shields, cloaked = false, warpDrive = 'disengaged', docked = false, phasersCharge = 'uncharged') {
    this.name = name;
    this.crewMembers = crewMembers;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = cloaked;
    this.warpDrive = warpDrive;
    this.docked = docked;
    this.phasersCharge = phasersCharge;

    if (crewMembers.length == 0) {
      this.docked = true;
    } 
    else {
      var ship = this
      this.crewMembers.forEach(function(crewMember) {
        crewMember.currentShip = ship;
      });
    }

  }

  chargePhasers() {
    this.phasersCharge = 'charged!';
  }
}