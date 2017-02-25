class Spaceship {
  constructor(name, members, phaserNum, shieldNum) {
    this.name = name;
    this.members = members;
    this.docked = true;
    if (this.members.length > 0) {
      this.members.forEach((member) => {
        member.currentShip = this;
      });
      this.docked = false;
    }
    this.phasers = phaserNum;
    this.shields = shieldNum;
    this.cloaked = false;
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'
  }


}
