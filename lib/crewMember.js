function CrewMember(position, currentShip = "Looking for a Rig"){
  this.position = position
  this.currentShip = currentShip
};

//CrewMember.prototype.specialAbility =
CrewMember.prototype.chargePhasers = function () {
  if(this.position == 'Gunner' && this.currentShip.name){
    this.currentShip.phasersCharge = 'charged!'
  } else{
    return 'had no effect'
  }
};

CrewMember.prototype.engageWarpDrive = function() {
  if(this.position == 'Pilot' && this.currentShip.name){
    this.currentShip.warpDrive = 'engaged!'
  }else{
    return 'had no effect'
  }
}

CrewMember.prototype.setsInvisibility = function () {
  if(this.position == 'Defender' && this.currentShip.name){
    this.currentShip.cloaked = true
  }else{
    return 'had no effect'
  }
};
