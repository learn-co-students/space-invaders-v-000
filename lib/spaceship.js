function Spaceship(name, crew, phasers, shields){
  this.name = name;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = 'disengaged';
  if(crew.length === 0){
    this.docked = true;
  } else {
    this.docked = false;
    var that = this;
    crew.forEach(function(member){
      member.currentShip = that;
    });
  }
  this.phasersCharge = 'uncharged';

}