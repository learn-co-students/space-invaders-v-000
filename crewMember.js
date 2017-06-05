class CrewMember {
  constructor(position) {
  this.position = position
  this.currentShip = 'Looking for a Rig'

  function shipStuff(crewMember, action, message) {
    return (this.position === `${crewMember}` && typeof(this.currentShip) === 'object' ? (this.currentShip.`${action}` = `${message}`) : ('had no effect'))
    }
  }

  chargePhasers() {          //can't figure out how to reuse this code.. stupid JS. or
    shipStuff("gunner", phasersCharge, 'charged!')
  }

  engageWarpDrive() {
    return (this.position === 'Pilot' && typeof(this.currentShip) === 'object' ? (this.currentShip.warpDrive = 'engaged!') : ('had no effect'))
  }

  setsInvisibility() {
    return (this.position === 'Defender' && typeof(this.currentShip) === 'object' ? (this.currentShip.cloaked = true) : ('had no effect'))
  }
}
