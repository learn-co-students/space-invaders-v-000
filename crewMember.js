class CrewMember {

  constructor(position) {
    this.position     = position;
    this.currentShip  = "Looking for a Rig";
  }

  setsInvisibility() {
    if (this.currentShip instanceof Spaceship) {
      (this.position == "Defender") ? this.currentShip.cloaked = true : "had no effect";
    } else {
      return "had no effect";
    }
  }

  chargePhasers() {
    if (this.currentShip instanceof Spaceship) {
      (this.position == "Gunner") ? this.currentShip.phasersCharge = "charged!" : "had no effect";
    } else {
      return "had no effect";
    }
  }

  engageWarpDrive() {
    if (this.currentShip instanceof Spaceship) {
      (this.position == "Pilot") ? this.currentShip.warpDrive = "engaged!" : "had no effect";
    } else {
      return "had no effect";
    }
  }

}

