
function CrewMember (position, currentShip) {
  this.position = position;
  this.currentShip = currentShip || "Looking for a Rig";
  this.engageWarpDrive = function() {
    if (this.position == 'Pilot') {
      if (this.currentShip != "Looking for a Rig") {
        this.currentShip.warpDrive = 'engaged!';
      } else {
        return "had no effect";
      }
    } else {
    return "had no effect";
    }
  };
  this.setsInvisibility = function() {
    if (this.position == 'Defender') {
      if (this.currentShip != "Looking for a Rig") {
        this.currentShip.cloaked = true;
      }
    }

    return "had no effect";
  };
  this.chargePhasers = function() {
    if (this.currentShip == "Looking for a Rig") {
      return "had no effect";
    } else {
      if (this.position == 'Gunner') {
        this.currentShip.phasersCharge = 'charged!';
      } else {
        return "had no effect";
      }
    }
  };
}