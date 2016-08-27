class Spaceship {

  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = this.setCrew(crew);
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.docked = this.setDocked();
    this.phasersCharge = 'uncharged';
  }

  setDocked() {
    if (this.crew.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  setCrew(crew) {
    for (var i in crew) {
      crew[i].currentShip = this;
    }
    return crew;
  }
}
