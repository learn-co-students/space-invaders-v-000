class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentShip = "Looking for a Rig";
  }
  // Pilots should only be able to engage warp drive if they have a ship.
  engageWarpDrive() {
    if (this.position === 'Pilot' && this.currentShip !== 'Looking for a Rig') {
      this.currentShip.warpDrive = "engaged!";
    } else {
      return "had no effect";
    }
  }
  // Defenders should only be able to cloak the ship if they have a ship.
  setsInvisibility() {
    if (this.position === 'Defender' && this.currentShip !== 'Looking for a Rig') {
      this.currentShip.cloaked = true;
    } else {
      return "had no effect";
    }
  }
  // Gunners should only be able to charge phasers if they have a ship.
  chargePhasers() {
    if (this.position === 'Gunner' && this.currentShip !== 'Looking for a Rig') {
      this.currentShip.phasersCharge = "charged!";
    } else {
      return "had no effect";
    }
  }
}
