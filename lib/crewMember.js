'use strict'; 

function CrewMember(position, currentShip){
  this.position = position
  if (currentShip === undefined) {
    this.currentShip = 'Looking for a Rig'
  }
}

CrewMember.prototype.currentShip = function(ship){
  if (ship !== undefined){
    this.currentShip = ship
  } 
  return this.currentShip
}

CrewMember.prototype.engageWarpDrive = function(){
  if (this.position === 'Pilot' && this.currentShip !== 'Looking for a Rig'){
    this.currentShip.warpDrive = "engaged!"
  }else{
    return 'had no effect'
  }
}

CrewMember.prototype.setsInvisibility = function(){
  debugger;
  if (this.position === 'Defender' && this.currentShip !== 'Looking for a Rig') {
    this.currentShip.cloaked = true
  }else{
    return 'had no effect'
  }
}

CrewMember.prototype.chargePhasers = function(){
  debugger;
  if (this.position === 'Gunner' && this.currentShip !== 'Looking for a Rig') {
    this.currentShip.phasersCharge = 'charged!'
  }else{
    return 'had no effect'
  }
}



