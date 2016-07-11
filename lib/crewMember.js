function CrewMember(position) {
  this.position = position;
  this.currentShip = 'Looking for a Rig';
}

CrewMember.prototype.engageWarpDrive = function () {
  if(this.position === "Pilot" && this.currentShip !== 'Looking for a Rig'){
      this.currentShip.warpDrive = "engaged!";
  }else{
    return "had no effect"; //when the crew member tries to use their special ability
  }
}

CrewMember.prototype.setsInvisibility = function () {
  if(this.position === "Defender" && this.currentShip !== 'Looking for a Rig'){
      this.currentShip.cloaked = true;
  }else{
    return "had no effect"; //when the crew member tries to use their special ability
  }
}

CrewMember.prototype.chargePhasers = function () {
  if(this.position === "Gunner" && this.currentShip !== 'Looking for a Rig'){
      this.currentShip.phasersCharge = "charged!";
  }else{
    return "had no effect"; //when the crew member tries to use their special ability
  }
}
