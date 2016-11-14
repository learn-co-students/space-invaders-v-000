class CrewMember {
  constructor(position, currentShip) {
    this.position = position;
    this.currentShip = "Looking for a Rig";
  }   

  engageWarpDrive() {
    if (this.position === 'Pilot' && this.currentShip != "Looking for a Rig") {
      this.currentShip.warpDrive = "engaged!";
    } else {
      return "had no effect";
    }
  }

  // should charge its phasers when a gunner calls `chargePhasers`'
  chargePhasers() {
    if (this.position === "Gunner" && this.currentShip != "Looking for a Rig") {
      this.currentShip.phasersCharge = "charged!"
    } else {
      return "had no effect";
    }
  }

  // should cloak when a defender `setsInvisibility`
  setsInvisibility() {
    if (this.position === "Defender" && this.currentShip != "Looking for a Rig") {
      this.currentShip.cloaked = true
    } else {
      return "had no effect";
    }
  }

}