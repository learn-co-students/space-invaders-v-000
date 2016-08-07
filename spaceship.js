class Spaceship {

  constructor(name, crew, phasers, shields) {
    
    for (var i = 0; i < crew.length; i++) {
      crew[i].currentShip = this;
    };

    this.name          = name;
    this.docked        = (crew.length > 0) ? false : true;
    this.phasers       = phasers;
    this.shields       = shields;
    this.cloaked       = false;
    this.warpDrive     = "disengaged";
    this.phasersCharge = "uncharged";

  }


}