class Spaceship {
  constructor(name, crewmembers, phasers, shields){
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.crew = crewmembers;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged';
    if (this.crew.length === 0){
      this.docked = true;
    } else {
      this.docked = false;
      this.crew.forEach(crewmember => {
        crewmember.currentShip = this;
      })
    }
  }
}
