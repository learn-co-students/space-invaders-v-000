const shipDefault = "Looking for a Rig"
const effectDefault = "had no effect"

class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentShip = shipDefault;
  }

  engageWarpDrive() {
    if (this.position === "Pilot" && this.currentShip !== shipDefault) {
      this.currentShip.warpDrive = "engaged!";
    } else {
      return effectDefault;
    }
  }

  setsInvisibility() {
    if (this.position === "Defender" && this.currentShip !== shipDefault) {
      this.currentShip.cloaked = true;
    } else {
      return effectDefault;
    }
  }

  chargePhasers() {
    if (this.position === "Gunner" && this.currentShip !== shipDefault) {
      this.currentShip.phasersCharge = "charged!";
    } else {
      return effectDefault;
    }
  }
}