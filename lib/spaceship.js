function Spaceship(name, crew, phasers, shields) {
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = "disengaged";
  if(crew.length === 0){
    this.docked = true;
  }else{
    this.docked = false;
  }
  this.phasersCharge = "uncharged";
  // a crew member should return their ship when `currentShip` is called on them
   var self = this; //object / instance of ship saved in variable
    this.crew.forEach(function(crewMember){
      crewMember.currentShip = self; // variable used here to set equal to currentShip
      console.log(self);
    });
}
