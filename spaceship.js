class Spaceship {
  constructor(name,crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked =  false;
    this.warpDrive = 'disengaged';
    if (this.crew.length > 0) {
      this.tellThemTheyOnAShip()
      this.docked = false;
    } else {
      this.docked = true;
    };
    this.phasersCharge = 'uncharged';
  };

  tellThemTheyOnAShip(){
    this.crew.forEach( (e) => {
      debugger
      e.currentShip = this;
    });
  };
  
};