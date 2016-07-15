class Spaceship(){
 constructor(name, crew, phasers, shields){
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;

  }

  
chargePhasers() {

    if (crew.length === 0) {
    this.docked = true;
     this.phasersCharge = 'uncharged';
  } else {
    this.docked = false;
    this.setCrew();
  };
  this.phasersCharge = 'charged!';
}

setCrew() {
  for (var i = 0; i < this.crew.length; i++) {
    this.crew[i].currentShip = this;
  }
}
