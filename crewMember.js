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
  engageWarpDrive() {
    return "had no effect"
  }

}
