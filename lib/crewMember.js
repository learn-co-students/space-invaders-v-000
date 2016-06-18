function CrewMember(position, currentShip){
  this.position = position;
  this.currentShip = currentShip || "Looking for a Rig";
}

CrewMember.prototype.engageWarpDrive = function(){
  if (this.position == "Pilot"){
    this.currentShip.warpDrive = "engaged!";
  }
  return 'had no effect';
}

CrewMember.prototype.setsInvisibility = function(){
  if (this.position == "Defender"){
    this.currentShip.cloaked = true;
  }
  return 'had no effect';
}

CrewMember.prototype.chargePhasers = function(){
  if (this.position == "Gunner"){
    this.currentShip.phasersCharge = "charged!";
  }
  return 'had no effect';
}