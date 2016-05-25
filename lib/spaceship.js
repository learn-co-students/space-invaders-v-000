function CrewMember(position, currentShip){
  this.position = position; 
  this.currentShip = currentShip; 

  if(typeof(this.currentShip) === "undefined"){
    this.currentShip = "Looking for a Rig";
  }
}

CrewMember.prototype.engageWarpDrive = function(){
  if(this.position === "Pilot" && this.currentShip != "Looking for a Rig"){
    this.currentShip.warpDrive = "engaged!"; 
  }
  else{
    return 'had no effect';
  }
}

CrewMember.prototype.setsInvisibility = function(){
  if(this.position === "Defender" && this.currentShip != "Looking for a Rig"){
    this.currentShip.cloaked = true;
  }
  else{
    return 'had no effect';
  }
}

CrewMember.prototype.chargePhasers = function(){
  if(this.position === "Gunner" && this.currentShip != "Looking for a Rig"){
    this.currentShip.phasersCharge = "charged!"
  }
  else{
    return 'had no effect';
  }
}

function Spaceship(name, crew, phasers, shields, cloaked=false, warpDrive="disengaged", docked, phasersCharge = "uncharged"){
  this.name = name;
  this.crew = crew; 
  this.phasers = phasers;
  this.shields = shields; 
  this.cloaked = cloaked;
  this.warpDrive = warpDrive;

  if(crew.length === 0 ){
    this.docked = true;
  }
  else{
    this.docked = false;
  }

  this.phasersCharge = phasersCharge;

  var spaceShip = this;

  for(var i = 0; i < crew.length; i++){
    crew[i].currentShip = spaceShip;
  }
}