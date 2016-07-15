class crewMember(){
  constructor(name,position){
    this.name = name;
    this.position = position;
  }


engageWarpDrive() {
  if (this.position === 'Pilot' && this.currentShip !== "Looking for a Rig") {
    this.currentShip.warpDrive = "engaged!";
  } else {
    return 'had no effect';
  }
};

}
