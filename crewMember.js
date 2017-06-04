class CrewMember {
  constructor(position) {
  this.position = position
  this.currentShip = 'Looking for a Rig'
  }

  chargePhasers() {          //can't figure out how to reuse this code.. stupid JS.
    return (this.position === 'Gunner' && typeof(this.currentShip) === 'object' ? (this.currentShip.phasersCharge = 'charged!') : ('had no effect'))
  }

  engageWarpDrive() {
    return (this.position === 'Pilot' && typeof(this.currentShip) === 'object' ? (this.currentShip.warpDrive = 'engaged!') : ('had no effect'))
  }

  setsInvisibility() {
    return (this.position === 'Defender' && typeof(this.currentShip) === 'object' ? (this.currentShip.cloaked = true) : ('had no effect'))
  }
}
