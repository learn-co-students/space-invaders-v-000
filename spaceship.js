class Spaceship{
  constructor(name, crew_array, phasers, shields ){
    this.name = name;
    this.crew_array = crew_array
    this.crew_array.length === 0 ? this.docked = true : this.docked = false
    this.crew_array = crew_array.forEach( (Crewmember) => Crewmember.currentShip = this )
    this.phasers = phasers;
    this.phasersCharge = 'uncharged'
    this.shields = shields;
    this.warpDrive = 'disengaged';
    this.cloaked = false;
  } // constructor


}


class CrewMember{
  constructor(position){
    this.position = position;
    this.currentShip = "Looking for a Rig"
  }

  chargePhasers(){
    if (this.currentShip === "Looking for a Rig"){
      return "had no effect"
    }
    if (this.position === "Gunner" && this.currentShip != "Looking for a Rig"){
      this.currentShip.phasersCharge = "charged!"
    } else {
      this.currentShip.phasersCharge = "uncharged"
    }
  }

  engageWarpDrive(){
    if (this.currentShip === "Looking for a Rig"){
      return "had no effect"
    }
    if (this.position === "Pilot" && this.currentShip != "Looking for a Rig"){
      this.currentShip.warpDrive = "engaged!"
    } else {
      this.currentShip.warpDrive = "disengaged"
    }
  }

  setsInvisibility(){
    if (this.currentShip === "Looking for a Rig"){
      return "had no effect"
    }
    if (this.position === "Defender" && this.currentShip != "Looking for a Rig"){
      this.currentShip.cloaked = true
    } else {
      this.currentShip.cloaked = false
    }
  }
}
