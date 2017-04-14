class Spaceship {
  constructor(name, crewMembers, phasers, shields) {

    this.crewMembers = crewMembers;
    var ship = this;
    crewMembers.forEach(function(crewMember) {
      crewMember.ship(ship);
    });

    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";

    if (this.crewMembers === undefined || this.crewMembers.length === 0 ) {
      this.docked = true
    } else {
      this.docked = false
    };
  };

  chargePhasers() {
    this.phasersCharge = "charged!";
  }

  engageWarpDrive() {
    this.warpDrive = "engaged!";
  }

  setsInvisibility() {
    this.cloaked = true;
  }
}
