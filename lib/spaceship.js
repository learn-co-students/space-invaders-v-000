function Spaceship(name, crew, phasers, shields){
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = "disengaged";
  this.phasersCharge = 'uncharged';

  if(crew.length === 0){
    this.docked = true;
  }else{
    this.docked = false;
  }

  this.setSpaceShip = function(){
    var ship = this;
    this.crew.forEach(function(crewMember){
      crewMember.currentShip = ship;
    });
  }
  this.setSpaceShip();
}
