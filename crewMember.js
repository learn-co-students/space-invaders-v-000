class CrewMember {

  constructor(position) {
    this.position = position
    this.currentShip = 'Looking for a Rig'
  }

  engageWarpDrive() {
    if (this.position === 'Pilot' && this.hasShip()) {
      this.currentShip.warpDrive = 'engaged!'
    }

    return 'had no effect'
  }

  setsInvisibility() {
    if (this.position === 'Defender' && this.hasShip()) {
      this.currentShip.cloaked = true
    }

    return 'had no effect'
  }

  chargePhasers() {
    if (this.position === 'Gunner' && this.hasShip()) {
      this.currentShip.phasersCharge = 'charged!'
    }

    return 'had no effect'
  }

  hasShip() {
    return this.currentShip !== 'Looking for a Rig'
  }
}
