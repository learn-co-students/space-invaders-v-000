class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crewArray = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged';
    this.dockedSetter = function() {
      if(this.crewArray.length > 0) {
        this.docked = false;
      } else {
        this.docked = true;
      }
    }
    this.crew = function() {
      for(var i=0; i<this.crewArray.length; i++) {
        this.crewArray[i].currentShip = this;
      }
    }
    this.crew();
    this.dockedSetter();
  }



}
