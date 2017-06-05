class CrewMember {
  constructor (position) {
    this.position = position;
    this.currentShip = 'Looking for a Rig';
  }

  chargePhasers() {
    // if ( ( this.currentShip === 'Looking for a Rig' ) || ( this.position !== 'Gunner' ) ) {
    //   return 'had no effect';
    // } else {
      this.currentShip.chargePhasers();
    // }
    // debugger;
  }

  engageWarpDrive() {
    if ( this.currentShip === 'Looking for a Rig' ) {
      return 'had no effect';
    }
  }

  setsInvisibility() {
    if ( this.currentShip === 'Looking for a Rig' ) {
      return 'had no effect';
    }
  }

  chargePhasers() {
    return 'had no effect';
  }
}
