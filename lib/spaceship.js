function Spaceship(name, crew, phasers, shields, cloaked, warpDrive, docked, phasersCharge){
  this.name = name;
  this.crew = crew; 
  this.phasers = phasers;
  this.shields = shields; 
  this.cloaked = cloaked;
  this.warpDrive = warpDrive;

  if(typeof(this.cloaked) === "undefined"){
    this.cloaked = false;
  }

  if(typeof(this.warpDrive) === "undefined"){
    this.warpDrive = "disengaged";
  }

  if(typeof(this.phasersCharge) === "undefined"){
    this.phasersCharge = "uncharged";
  }


  if(crew.length === 0 ){
    this.docked = true;
  }
  else{
    this.docked = false;
  }

  var spaceShip = this;

  for(var i = 0; i < crew.length; i++){
    crew[i].currentShip = spaceShip;
  }
}