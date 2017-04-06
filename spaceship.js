class Spaceship {
  constructor(name, crew, phasers, shields, cloaked = false, warpDrive = "disengaged", docked = true, phasersCharge = "uncharged") {
    this.name = name;
    this.crew = crew
    //see if there's a crew
    if(crew.length !== 0) {
      docked = false;
      for(var i=0; i < crew.length; i++){
        crew[i].currentShip = this
      }
    }
    this.phasers = phasers;
    this.shields = shields;

    this.cloaked = cloaked
    this.warpDrive = warpDrive
    this.docked = docked
    this.phasersCharge = phasersCharge
  }
}
