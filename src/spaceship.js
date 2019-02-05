class Spaceship {
  constructor( name, crew, phasers, shields ) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged';
    crew.length ? ( this.docked = false ) : ( this.docked = true );


    this.associateCrew();
  }

  associateCrew() {
    this.crew.forEach( crewMember => ( crewMember.currentShip = this ) );
  }
}
