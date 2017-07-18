class CrewMember {

  constructor (position, currentShip) {
    this.position = position;
    if (currentShip) {
      this.currentShip = currentShip;
    } else {
      this.currentShip = "Looking for a Rig"
    }
  }



  //methods
  hasCurrentShip() {
    return this.currentShip !== "Looking for a Rig"
  }

  engageWarpDrive() {
    if (this.position === 'Pilot' && this.hasCurrentShip()) {
      this.currentShip.warpDrive = 'engaged!'
    } else {
      return "had no effect"
    }
  }

  setsInvisibility() {
    if (this.position === 'Defender' && this.hasCurrentShip()) {
      this.currentShip.cloaked = true
    } else {
      return "had no effect"
    }
  }
  chargePhasers() {
    if (this.position === 'Gunner' && this.hasCurrentShip()) {
      this.currentShip.phasersCharge = 'charged!'
    } else {
      return "had no effect"
    }
  }

}
