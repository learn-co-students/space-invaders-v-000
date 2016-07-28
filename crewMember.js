
class CrewMember {
  constructor(position, currentShip){
    this.position = position;
    if(currentShip === undefined) {
      this.currentShip = 'Looking for a Rig'
    } else {
      this.currentShip = currentShip;
    }
  }

  engageWarpDrive() {
    if (this.currentShip !== "Looking for a Rig" && this.position === "Pilot") {
      this.currentShip.warpDrive = "engaged!"
    } else {
      return "had no effect";
    }
  }

  setsInvisibility() {
    if (this.currentShip !== "Looking for a Rig" && this.position === "Defender") {
      this.currentShip.cloaked = true;
    } else {
      return 'had no effect'
    }
  }

  chargePhasers() {
    if (this.currentShip !== "Looking for a Rig" && this.position === "Gunner") {
      this.currentShip.phasersCharge = 'charged!'
    } else {
      return 'had no effect'
    }
  }
}
