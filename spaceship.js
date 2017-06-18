class Spaceship {
  constructor(name, crew, phasers, shields){
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.crew = crew;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";
    if (this.crew.length == 0){
      this.docked = true;
    } else {
      this.docked = false;
      this.crew.forEach(crewMember => {
        crewMember.currentShip = this;
      })
    }
  }
}
