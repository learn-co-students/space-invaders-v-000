class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";
    if (crew.length === 0) {
      this.docked = true;
    } else{
      this.docked = false;
    }
    // callback for new Shpaceship
    this.notifyCrew();
  }

  // loop thorugh each crew member and assign this ship to them
  notifyCrew(){
    this.crew.forEach(crewMember => {
      crewMember.currentShip = this;
    });
  }

}
