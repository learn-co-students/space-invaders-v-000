const NO_SHIP_TEXT = 'Looking for a Rig';

function CrewMember(position) {
  this.position = position;
  this.currentShip = NO_SHIP_TEXT;
}

CrewMember.prototype.engageWarpDrive = function() {
  if (this.currentShip === NO_SHIP_TEXT) {
    return 'had no effect';
  } else if (this.position === "Pilot") {
    this.currentShip.warpDrive = 'engaged!';
  }
}

CrewMember.prototype.setsInvisibility = function() {
  if (this.currentShip === NO_SHIP_TEXT) {
    return 'had no effect';
  } else if (this.position === "Defender") {
    this.currentShip.cloaked = true;
  }
}

CrewMember.prototype.chargePhasers = function() {
  if (this.currentShip === NO_SHIP_TEXT) {
    return 'had no effect';
  } else if (this.position === "Gunner") {
    this.currentShip.phasersCharge = 'charged!';
  }
}