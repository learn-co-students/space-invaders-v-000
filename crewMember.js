class CrewMember {
  constructor(position){
    this.position = position; 
    this.currentShip = "Looking for a Rig"; 
  }

  setCurrentShip(ship) {
    this.currentShip = ship;  
  }

  chargePhasers() {
    if (this.currentShip === "Looking for a Rig") { 
      return 'had no effect';  
    } else if (this.position == "Gunner") {
      this.currentShip.phasersCharge = "charged!";        
    } else {
      return;  
    }
  }

  engageWarpDrive() {
     if (this.currentShip === "Looking for a Rig") { 
      return 'had no effect';  
    } else if (this.position == "Pilot") {
      this.currentShip.warpDrive = "engaged!";  
    } else {
      return;  
    }
  }

  setsInvisibility() {
    if (this.currentShip === "Looking for a Rig") { 
      return 'had no effect';  
    } else if (this.position == "Defender") {
      this.currentShip.cloaked = true;  
    } else {
      return;  
    }
  }
}
