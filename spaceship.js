class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;

    for(var CrewMember in this.crew) {
          this.crew[CrewMember]["currentShip"] = this
        };

    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.docked = this.crew.length > 0 ? false : true;
    this.phasersCharge = "uncharged";
  };
}
