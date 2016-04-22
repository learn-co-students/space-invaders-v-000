function Spaceship(name, crew, phasers, shields){
  var ship = this
  this.name = name;
  this.crew = crew;

  $.each(crew, function(i, v){
    v.currentShip = ship
  });

  this.phasers = phasers;
  this.shields = shields;
  this.warpDrive = 'disengaged';
  this.cloaked = false;

  if(crew.length === 0){
    this.docked = true;
  }else{
    this.docked = false;
  }
  this.phasersCharge = 'uncharged';

}
