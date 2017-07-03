class Spaceship {

  constructor(name, crew, phasers, shields) {
    this.name = name;

    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.docked = crew.length <= 0; // if we have a crew then we are not docked. otherwise we are
    this.phasersCharge = "uncharged";

    // set the crew
    this.setCrew(crew);
  }

  setCrew(crew){
    this.crew = crew
    crew.forEach((member) => {
      member.currentShip = this
    });
  }

}
