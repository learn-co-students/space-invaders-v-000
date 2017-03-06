class Spaceship {
  constructor(name, crew, phasers, shields){
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";
    if(crew.length === 0){
      this.docked = true;
    } else {
      this.docked = false;
      for(var i = 0; i < crew.length; i++){
        crew[i].currentShip = this;
      }
    }
  }
}

class CrewMember {
  constructor(position){
    this.position = position;
    this.currentShip = "Looking for a Rig";
  }

  engageWarpDrive(){
    if(this.currentShip !== "Looking for a Rig" && this.position === "Pilot"){
      this.currentShip.warpDrive = 'engaged!';
    } else {
      return "had no effect"
    }
  }

  setsInvisibility(){
    if(this.currentShip !== "Looking for a Rig" && this.position === "Defender"){
      this.currentShip.cloaked = true;
    } else {
      return "had no effect"
    }
  }

  chargePhasers(){
    if(this.currentShip !== "Looking for a Rig" && this.position === "Gunner"){
      this.currentShip.phasersCharge = 'charged!';
    } else {
      return "had no effect";
    }
  }
}
