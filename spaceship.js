class Spaceship {
  constructor(
    name,
    crew,
    phasers,
    shields,
    cloaked = false,
    warpDrive = "disengaged",
    docked = true,
    phasersCharge = "uncharged"
  ){
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = cloaked;
    this.warpDrive = warpDrive;
    this.docked = docked;

    if (crew.length > 0){
      this.docked = false
      this.informCrewMembers(this);
    }

    this.phasersCharge = phasersCharge;
  }

  informCrewMembers(ship){
    this.crew.forEach(function(member){
      member.currentShip = ship;
    });
  }

}
