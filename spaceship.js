class Spaceship {
  constructor(name,crew,phasers,shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";

    this.docked = true;
    if(crew.length > 0){
      this.docked = false;
    }

    for (var i = 0; i < crew.length; i++) {
      crew[i].currentShip = this;
    }
  }

  cloak(){
    this.cloaked = true;
  }

  engageWarpDrive(){
    this.warpDrive = "engaged!";
  }

  chargePhasers(){
    this.phasersCharge = "charged!";
  }



}
