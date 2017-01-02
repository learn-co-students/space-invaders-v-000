class Spaceship {
  constructor(name, crew, phasers, shields ) {
    this.name = name; 
    this.crew = crew; 
    this.phasers = phasers; 
    this.shields = shields; 
    this.cloaked = false; 
    this.warpDrive = 'disengaged'; 
    this.phasersCharge = 'uncharged'; 
    
    //set crew up if crew exists
    if (this.crew != undefined && this.crew.length > 0) {
      this.docked = false; 
      for (var i = 0; i < this.crew.length; i++) {
        this.crew[i].setCurrentShip(this);  
      }
    } else {
      this.docked = true; 
    }
  }
}
