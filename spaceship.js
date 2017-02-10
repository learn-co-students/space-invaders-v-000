class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name       = name;
    this.crew       = crew;
    this.phasers    = phasers;
    this.shields    = shields;
    this.warpDrive  = 'disengaged';
    this.cloaked    = false;
    if (crew.length === 0) {
      this.docked = true;
    }else{
      this.docked = false;
    }
    this.phasersCharge = "uncharged";
    this.notifyCrew();
  }
  notifyCrew(){
    this.crew.forEach(crewMember => {
      crewMember.currentShip = this;
    });
  }

}
