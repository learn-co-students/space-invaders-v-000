function Spaceship(name, crew, numPhasers, numShields) {
    
    this.name = name;
    this.crew = crew;
    this.phasers = numPhasers;
    this.shields = numShields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    if (this.crew.length === 0) {
        this.docked = true;
    } else {
        this.docked = false;
    }
    this.phasersCharge = "uncharged";
    for ( var i = 0 ; i < crew.length ; i++ ) {
        crew[i].currentShip = this;
    }
}
