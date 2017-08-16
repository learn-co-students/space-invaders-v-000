class Spaceship {
  constructor(name, crews, phasers, shields) {
    this.name = name;
    this.crews= crews;
    this.phasers = phasers;
    this.shields = shields;
    this.warpDrive = 'disengaged';
    this.cloaked = false;
    this.docked = crews.length === 0 ? true : false
    this.phasersCharge = 'uncharged';
    this.notifyCrew();
  }
  notifyCrew() {
    this.crews.forEach(crew=>{
      crew.currentShip = this;
    });
  }

}
