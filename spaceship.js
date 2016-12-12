class Spaceship {
  constructor(name, crew, phasers, shields){
    this.name = name;
    this.crew = (crew.length === 0) ? [] : this.setCrew(crew);
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.docked = (this.crew.length === 0) ? true : false;
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged';
  }

  setCrew(crew){
    for( let i in crew){
      crew[i].currentShip = this;
    }
    return crew;
  }
}
