function CrewMember(position, currentShip = 'Looking for a Rig'){
  this.position =  position;
  this.currentShip = currentShip;
}

CrewMember.prototype.chargePhasers = function() {
  if (this.currentShip === 'Looking for a Rig' || this.position != 'Gunner') {
    return 'had no effect';
  }
  else {
    this.currentShip.phasersCharge = 'charged!';
  }
};

CrewMember.prototype.engageWarpDrive = function() {
  if (this.currentShip === 'Looking for a Rig' || this.position != 'Pilot') {
    return 'had no effect';
  }
  else {
    this.currentShip.warpDrive = 'engaged!';
  }
};

CrewMember.prototype.setsInvisibility = function() {
  if (this.currentShip === 'Looking for a Rig' || this.position != 'Defender') {
    return 'had no effect';
  }
  else {
    this.currentShip.cloaked = true;
  }
};