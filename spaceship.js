class Spaceship{

  constructor(name, crew, phasers, shields){
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.docked = crew.length==0;
    this.phasersCharge = 'uncharged';
    crew.forEach((crewMember)=>{
      crewMember.currentShip = this;
    });
  }

}
