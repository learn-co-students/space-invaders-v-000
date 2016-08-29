class Spaceship{
  constructor(name, crewMembers, phasers, shields, cloaked = false, warpDrive = "disengaged", docked = false, phasersCharge = "uncharged"){
    this.name = name;
    this.crewMembers = crewMembers;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = cloaked;
    this.warpDrive = warpDrive;
    this.docked = docked;
    this.phasersCharge = phasersCharge; 

    if (crewMembers.length === 0){
      this.docked = true;
    }

    for (var i = 0; i < crewMembers.length; i++){
      crewMembers[i].currentShip = this
    }

  }  
}





