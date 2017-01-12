class Spaceship{
  constructor(name, crew, phasers, shields){
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    if(crew.length > 0){this.docked = false;} else {this.docked = true;}
    this.phasersCharge = 'uncharged';
    this.setSpaceship();
  };
  setSpaceship(){
    this.crew.forEach(crew_member_obj => {
      crew_member_obj.currentShip = this;
    });
  };
};
