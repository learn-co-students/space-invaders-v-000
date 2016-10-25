class CrewMember {
  constructor(position) {
    this.position = position;
    if (!this.currentShip) {
    this.currentShip = "Looking for a Rig";
    } else {
      debugger

      return this.currentShip;
    }
  }
  engageWarpDrive() {
    this.currentShip.warpDrive = "engaged!"
    return "had no effect";
  }
  setsInvisibility() {
    return "had no effect";
  }
  chargePhasers() {
    return "had no effect";
  }
  setCurrentShip(ship){
    debugger
    this.currentShip = ship;
  }

}

class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged';
    if (this.crew.length == 0) {
      this.docked = true;
    } else {
      this.docked = false;
      this.crew.forEach(function(member) {
        debugger
        var ship = this.value;
        member.currentShip = ship;
      })
    }
  }
}
