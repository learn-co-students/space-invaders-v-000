function Spaceship(name, crew, phasers, shields, cloaked = false, warpDrive = 'disengaged', phasersCharge = 'uncharged') {
  
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields; 
    this.cloaked = cloaked;
    this.warpDrive = warpDrive;
    this.phasersCharge = phasersCharge;
    for (var i = 0; i < crew.length; i ++) {
      crew[i].currentShip = this
    }
    if (crew.length === 0) {
      this.docked = true
    }
    else {
      this.docked = false
    }
    
  }
  

  