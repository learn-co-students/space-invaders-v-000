class CrewMember {

  constructor(position) {
    this.position = position;
    this.currentShip = 'Looking for a Rig'
  }

  engageWarpDrive() {
    if (this.position == "Pilot" && this.currentShip != 'Looking for a Rig') {
      if (this.currentShip.warpDrive === 'disengaged') {
        this.currentShip.warpDrive = "engaged!"
      } else if (this.currentShip.warpDrive === "engaged!") {
        this.currentShip.warpDrive = 'disengaged'
      }
    } else {
      return 'had no effect'
    }
  }

  chargePhasers() {
    if (this.position == "Gunner" && this.currentShip != 'Looking for a Rig') {
      if (this.currentShip.phasersCharge === 'uncharged') {
        this.currentShip.phasersCharge = 'charged!'
      } else if (this.currentShip.phasersCharge === 'charged!') {
        this.currentShip.phasersCharge = 'uncharged'
      }
    } else {
      return 'had no effect'
    }
  }

  setsInvisibility() {
    if (this.position == 'Defender' && this.currentShip != 'Looking for a Rig') {
      if (this.currentShip.cloaked === false) {
        this.currentShip.cloaked = true
      } else if (this.currentShip.cloaked === true) {
        this.currentShip.cloaked = false
      }
    } else {
      return 'had no effect'
    }
  }

}
