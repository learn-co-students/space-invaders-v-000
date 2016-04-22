function CrewMember(position){
  this.position = position;
  this.currentShip = "Looking for a Rig";
}

CrewMember.prototype.chargePhasers = function(){
  if(this.position === 'Gunner' && this.currentShip != "Looking for a Rig"){
    this.currentShip.phasersCharge = 'charged!'
  }else if(this.position === 'Gunner'){
    return 'had no effect'
  }else{
    this.currentShip.phasersCharge
  }
}

CrewMember.prototype.engageWarpDrive = function(){
  if(this.position === 'Pilot' && this.currentShip != "Looking for a Rig"){
    this.currentShip.warpDrive = 'engaged!'
  }else if(this.position === 'Pilot'){
    return 'had no effect'
  }else{
    this.currentShip.phasersCharge
  }
}

CrewMember.prototype.setsInvisibility = function(){
  if(this.position === 'Defender' && this.currentShip != "Looking for a Rig"){
    this.currentShip.cloaked = true
  }else if(this.position === 'Defender'){
    return 'had no effect'
  }else{
    this.currentShip.phasersCharge
  }
}