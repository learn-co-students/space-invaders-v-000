function Spaceship(name, crew, phasers, shields){
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.phasersCharge = 'uncharged';
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = 'disengaged';
  if(crew.length===0){
    this.docked = true;
  } else {
    this.addCrew(crew);
    this.docked = false;
  };

};
Spaceship.prototype.addCrew = function(crew){
  var thisShip = this;
  $.each(crew, function(index, member){
    member.currentShip = thisShip;
  });
};
