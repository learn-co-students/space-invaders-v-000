class Spaceship {
  constructor(name, crew, phasers, shields){
    this.name = name;
    this.crew = crew;
    this.cloaked = false;
    this.warpDrive = "disengaged"
    this.phasers = phasers;
    this.shields = shields;
    this.phasersCharge = "uncharged";
    if (crew.length === 0) {
      this.docked = true;
    } else {
      this.docked = false;
    }
    this.setCrewsCurrentShip();
  }

  setCrewsCurrentShip(){
    if (this.crew.length !== 0) {
      this.crew.forEach(member => {
        member.currentShip = this;
      });
    }
  }
}
