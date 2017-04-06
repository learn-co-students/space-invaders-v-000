class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentShip = "Looking for a Rig"
  }

  engageWarpDrive() {
    if (this.currentShip instanceof Spaceship) {
      if (this.position === "Pilot") {
        this.currentShip.warpDrive = "engaged!";
      }
    } else {
      return "had no effect";
    }
  }

  setsInvisibility() {
    if (this.currentShip instanceof Spaceship) {
      if (this.position === "Defender") {
        this.currentShip.cloaked = true;
      }
    } else {
      return "had no effect";
    }
  }

  chargePhasers() {
    if (this.currentShip instanceof Spaceship) {
      if (this.position === "Gunner") {
        this.currentShip.phasersCharge = "charged!";
      }
    } else {
      return "had no effect";
    }
  }
}
