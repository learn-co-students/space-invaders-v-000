function CrewMember(position){
  this.position = position;
  this.currentShip = "Looking for a Rig";
}

CrewMember.prototype.engageWarpDrive = function(){
  if (this.currentShip === "Looking for a Rig") {
    return "had no effect";
  } else if(this.position == "Pilot" ) {
    this.currentShip.warpDrive = "engaged!";
  }
}

CrewMember.prototype.setsInvisibility = function(){
  if (this.currentShip === "Looking for a Rig") {
    return "had no effect";
  } else if(this.position ==  "Defender") {
    this.currentShip.cloaked = true;
  }
}

CrewMember.prototype.chargePhasers = function(){
  if (this.currentShip === "Looking for a Rig") {
    return "had no effect";
  } else if(this.position == "Gunner" ) {
    return this.currentShip.phasersCharge = 'charged!';
  }
}