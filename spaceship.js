class Spaceship {
  constructor(name, crewMembers, phasers, shields) {
    this.name          = name;
    this.crewMembers   = crewMembers;
    this.phasers       = phasers;
    this.shields       = shields;
    this.cloaked       = false;
    this.warpDrive     = 'disengaged';
    this.phasersCharge = 'uncharged';
    this.docked        = !!(crewMembers.length === 0);
    this.crewMembers.forEach(member => member.currentShip = this);
  }

  engageWarp() {
    this.warpDrive = 'engaged!';
    return this.warpDrive;
  }

  cloak() {
    this.cloaked = true;
    return this.cloaked;
  }

  arm() {
    this.phasersCharge = 'charged!';
    return this.phasersCharge;
  }
}
