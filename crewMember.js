class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentShip = "Looking for a Rig"
  }

  engageWarpDrive() {
    if (this.currentShip == "Looking for a Rig") {
      return "had no effect"
    }
    else if (this.position == "Pilot") {
      this.currentShip.warpDrive = "engaged!"
    }
  }

  setsInvisibility() {
    if (this.position === "Defender" && this.currentShip !== "Looking for a Rig") {
      this.currentShip.cloaked = true
    }
    else {
    return "had no effect"
    }
  }

  chargePhasers() {
    if (this.position == "Gunner" && this.currentShip != "Looking for a Rig") {
      this.currentShip.phasersCharge = "charged!"
    }
    else {
    return "had no effect"
    }
  }

  currentShip() {
    return this.currentShip
  }
}
