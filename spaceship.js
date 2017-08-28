class Spaceship {
  constructor(name, crew, phasers, shields){
    this.name = name;
    this.crew = crew;
    this.addCrew();
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    if (this.crew.length == 0){
      this.docked = true;
    }else{
      this.docked = false;
    }
    this.phasersCharge = "uncharged";
  }

  addCrew(){
    this.crew.forEach(crewMember => {
      crewMember.currentShip = this;
    });
  }
}
