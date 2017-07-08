class CrewMember {

  constructor(position, spaceship) {
    this.position = position;
    this.currentShip = spaceship ? spaceship : 'Looking for a Rig';
  }

  setsInvisibility() {
    if (this.position == "Defender" && this.currentShip != "Looking for a Rig") {
      this.currentShip.cloaked = true;
    } else {
      return "had no effect";
    }
  }

  chargePhasers() {
    if (this.position == "Gunner" && this.currentShip != "Looking for a Rig") {
      this.currentShip.phasersCharge = "charged!";
    } else {
      return "had no effect";
    }
  }

  engageWarpDrive() {
    if (this.position == "Pilot" && this.currentShip != "Looking for a Rig") {
      this.currentShip.warpDrive = "engaged!";
    } else {
      return "had no effect";
    }
  }

}
