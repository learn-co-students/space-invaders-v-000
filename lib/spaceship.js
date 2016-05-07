function Spaceship(name,crew,phasers,shields){
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = "disengaged";
  this.phasersCharge = "uncharged";
  if (this.crew.length > 0){
    this.addCrew(this.crew);
    this.docked = false;
    } else {
      this.docked = true;
    };
}

Spaceship.prototype.addCrew = function(crew){
  for(var i = 0; i < crew.length;i++){
    crew[i].currentShip = this;
  };
}
