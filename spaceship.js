class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentShip = "Looking for a Rig";
  }

  engageWarpDrive() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect";
    } else {
    this.currentShip.warpDrive = "engaged!";
    }
  }
  setsInvisibility() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect";
    } else {
      this.currentShip.cloaked = true;
    }
  }
  chargePhasers() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect";
    } else {
      this.currentShip.phasersCharge = "charged!";
    }
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
    var ship = this;
    if (this.crew.length == 0) {
      this.docked = true;
    } else {
      this.docked = false;
      this.crew.forEach(function(member) {
        member.currentShip = ship;
      })
    }
  }

}
