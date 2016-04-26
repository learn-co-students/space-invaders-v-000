function CrewMember (position) {
  this.position = position;
  this.currentShip = "Looking for a Rig";

  this.engageWarpDrive = function () {
    if (this.position == "Pilot" && this.currentShip instanceof Spaceship) {
      this.currentShip.warpDrive = (this.currentShip.warpDrive == "disengaged") ? "engaged!" : "disengaged";
    } else {
      return "had no effect";
    }
  };

  this.setsInvisibility = function () {
    if (this.position == "Defender" && this.currentShip instanceof Spaceship) {
      this.currentShip.cloaked = (this.currentShip.cloaked == true) ? false : true;
    } else {
      return "had no effect";
    }
  };

  this.chargePhasers = function () {
    if (this.position == "Gunner" && this.currentShip instanceof Spaceship) {
      this.currentShip.phasersCharge = (this.currentShip.phasersCharge == "uncharged") ? "charged!" : "uncharged";
    } else {
      return "had no effect";
    }
  };

}