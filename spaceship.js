class Spaceship {
  constructor(name, crew, phasers, shields, cloaked, warpDrive, docked, phasersCharge) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    if (crew.length === 0) {
      this.docked = true;
    } else {
      this.docked = false;
    }
    this.phasersCharge = 'uncharged';
    this.notifyCrew();
  }


  notifyCrew () {
    this.crew.forEach(CrewMember =>{
      CrewMember.currentShip = this;
    });
  }
}
