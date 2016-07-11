function CrewMember(position) {
  this.position = position;
  this.currentShip = 'Looking for a Rig';
}
// currentShip can be used here because we set currentShip to self of the spaceship so CrewMember object is aware of the spaceship object
// should have it\'s warp drive set to "engaged" only when the pilot uses `engageWarpDrive`
CrewMember.prototype.engageWarpDrive = function () {
  if(this.position === "Pilot" && this.currentShip !== 'Looking for a Rig'){ //if a pilot is passed in as an argument in the array inside of a spaceship instance
      this.currentShip.warpDrive = "engaged!";
  }else{
    return "had no effect"; //when the crew member tries to use their special ability
  }
}

// should cloak when a defender `setsInvisibility`
CrewMember.prototype.setsInvisibility = function () {
  if(this.position === "Defender" && this.currentShip !== 'Looking for a Rig'){ //same as line 8 (Defender)
      this.currentShip.cloaked = true;
  }else{
    return "had no effect"; //when the crew member tries to use their special ability
  }
}
// should charge its phasers when a gunner calls `chargePhasers`
CrewMember.prototype.chargePhasers = function () {
  if(this.position === "Gunner" && this.currentShip !== 'Looking for a Rig'){ //same as line 8 (Gunner)
      this.currentShip.phasersCharge = "charged!";
  }else{
    return "had no effect"; //when the crew member tries to use their special ability
  }
}
//
