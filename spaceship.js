class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.phasersCharge = 'uncharged';
    this.warpDrive = 'disengaged'; 
    this.docked = this.crew.length < 1 ? true : false;
    this.addCrewMembers();
  }

  addCrewMembers() {
    var ship = this;
    this.crew.forEach(function(member){
      member.currentShip = ship;
    });
  };
}






