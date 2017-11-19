class CrewMember {

  constructor(position) {
    this.position = position;
    this.currentShip = "Looking for a Rig"
    this.phasersCharge = 'uncharged'
  }

  setsInvisibility() {
    return 'had no effect';
  }

  chargePhasers() {
    if (this.position == 'Gunner' && typeof(this.currentShip) == 'object')
      this.currentShip.phasersCharge = 'charged!';
    else 
      return 'had no effect';
  }

  engageWarpDrive() {
    if (this.position == 'Pilot' && typeof(this.currentShip) == 'object')
      this.currentShip.warpDrive = "engaged!"
    else
      return 'had no effect'
  }

  setsInvisibility() {
    if (this.position == 'Defender' && typeof(this.currentShip) == 'object')
      this.currentShip.cloaked = true;
    else 
      return 'had no effect';
  }

}