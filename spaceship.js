class Spaceship {

  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    var ship = this
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";
    if (this.crew.length === 0) {
      this.docked = true;
    } else {
      this.docked = false;
    }
    crew.forEach(function(value){
      value.currentShip = ship;
    })
  }
}
