class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.warpDrive = 'disengaged';
    this.cloaked = false;
    this.phasersCharge = 'uncharged';

    if (crew.length === 0) {
      this.docked = true;
    } else {
      this.docked = false;
      for(var i = 0; i < this.crew.length; i++) {
        this.crew[i].currentShip = this;
      }
    }

  }//end constructor

}//end Spaceship
