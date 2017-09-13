class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;

    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive= "disengaged";
    this.docked = (crew.length < 1) ? true : false;
    this.phasersCharge= "uncharged";


    this.notifyCrew();
  }

  notifyCrew(){
    this.crew.forEach(crewMember =>{
        crewMember.currentShip = this;
    });
}


}
