class CrewMember {
  constructor (position) {
    this.position = position;
    this.currentShip = 'Looking for a Rig';
  }

  chargePhasers() {
    if ( ( this.currentShip === 'Looking for a Rig' ) || ( this.position !== 'Gunner' ) ) {
      return 'had no effect';
    } else {
      this.currentShip.chargePhasers();
    }
  }

  engageWarpDrive() {
    if ( ( this.currentShip === 'Looking for a Rig' ) || ( this.position !== 'Pilot' ) ) {
      return 'had no effect';
    } else {
      this.currentShip.engageWarpDrive();
    }
  }

  setsInvisibility() {
    if ( ( this.currentShip === 'Looking for a Rig' ) || ( this.position !== 'Defender' ) ) {
      return 'had no effect';
    } else {
      this.currentShip.setsInvisibility();
    }
  }
}
