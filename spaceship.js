class Spaceship {
  constructor(name, crewMembers, phasers, shields) {
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";
      if (crewMembers.length == 0) {
        this.docked = true;
      }
      else {
        this["Pilot"] = crewMembers[0];
        crewMembers[0].currentShip = this;
        this["Defender"] = crewMembers[1];
        crewMembers[1].currentShip = this;
        this["Gunner"] = crewMembers[2];
        crewMembers[2].currentShip = this;
        this.docked = false
      }
  }

}
