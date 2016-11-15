class Spaceship {
  constructor(name, crewMembers, phasers, shields) {
    this.name = name;
    this.crewMembers = crewMembers;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";
    this.docked = false;
    if (crewMembers.length === 0) {
     this.docked = true;
    }
    for (var i = 0; i < crewMembers.length; i++) {
      crewMembers[i].currentShip = this;
    }

  }


}
