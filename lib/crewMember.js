'use strict';
function CrewMember(position) {
  this.position = position;
  this.currentShip = (this.currentShip === undefined ?  'Looking for a Rig' : this.currentShip);
  this.engageWarpDrive = function () {
    if (this.currentShip !== 'Looking for a Rig' && this.position === 'Pilot'){
      this.currentShip.warpDrive = 'engaged!'
    }
    return 'had no effect';
  }
  this.setsInvisibility = function () {
    if (this.currentShip !== 'Looking for a Rig' && this.position === 'Defender'){
      this.currentShip.cloaked = true;
    }
    return 'had no effect';
  }
  this.chargePhasers = function () {
    if (this.currentShip !== 'Looking for a Rig' && this.position === 'Gunner'){
      this.currentShip.phasersCharge = 'charged!'
    }
    return 'had no effect';
  }
}
