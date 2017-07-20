class CrewMember {
  constructor(position){
    this.position = position;
    this.currentShip = "Looking for a Rig"
  }

  engageWarpDrive(){
    if (this.currentShip === "Looking for a Rig"){
      return "had no effect"
    } else {
      if(this.position == "Pilot"){
        this.currentShip.engageWarpDrive()
      }
    }
  }

  setsInvisibility(){
    if (this.currentShip === "Looking for a Rig"){
      return "had no effect"
    } else {
      if(this.position === "Defender"){
        this.currentShip.cloak();
      }
    }
  }

  chargePhasers() {
    if (this.currentShip === "Looking for a Rig"){
      return "had no effect"
    } else if(this.position === "Gunner") {
      this.currentShip.chargePhasers();
    }
  }
}
