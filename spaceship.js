class Spaceship {
  constructor(name, crew) {
    this.name = name;
    this.crew = crew;
    this.phasers = 5;
    this.shields = 4;
    this.cloaked = false;
    this.warpDrive = 'disengaged';

    this.phasersCharge = 'uncharged';
    if(crew.length === 0) {
      this.docked = true;
    } else {
      this.docked = false;
    }
    this.updateCrew(); 
  }

  updateCrew() {
    this.crew.forEach(crewMember => {
      crewMember.currentShip = this;
    })
  }
}
