class CrewMember {
  constructor (position) {
    this.position = position
    this.currentShip = "Looking for a Rig"
    //cantina if not put inside ship on init
    //unable to use spec. abil if not on ship
    //aware of their ship when they are added to it.
  }

  engageWarpDrive () {
    if (this.currentShip === "Looking for a Rig" || this.position != "Pilot") {
      return "had no effect";
    }  
    else if (this.currentShip != "Looking for a Rig" && this.position === "Pilot") {
      this.currentShip.warpDrive = "engaged!";
    }
  }
  setsInvisibility () {
   if (this.currentShip === "Looking for a Rig" || this.position != "Defender") {
      return "had no effect"
    }  
    else if (this.currentShip != "Looking for a Rig" && this.position === "Defender") {
      this.currentShip.cloaked = true
    } 
  }
  chargePhasers () {
    if (this.currentShip === "Looking for a Rig" || this.position != "Gunner") {
      return "had no effect"
    }  
    else if (this.currentShip != "Looking for a Rig" && this.position === "Gunner") {
      this.currentShip.phasersCharge = "charged!"
    }
  }
}

 
