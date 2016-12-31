class Spaceship {
  constructor(name, crewArray, phasers, shields) {
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";
    this.crew = crewArray;

    for (var i = 0; i < this.crew.length; i++) {
      this.crew[i].currentShip = this;
    }

    if (this.crew.length === 0) {
      this.docked = true;
    } else {
      this.docked = false;
    }
  }

}

class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentShip = "Looking for a Rig";
  }

  engageWarpDrive() {
    if (this.position === "Pilot") {
      if (this.currentShip === "Looking for a Rig") {
        return 'had no effect';
      } else {
        this.currentShip.warpDrive = "engaged!";
      }
    }
  }

  setsInvisibility() {
    if (this.position === "Defender") {
      if (this.currentShip === "Looking for a Rig") {
        return 'had no effect';
      } else {
        this.currentShip.cloaked = true;
      }
    }
  }

  chargePhasers() {
    if (this.position === "Gunner") {
      if (this.currentShip === "Looking for a Rig") {
        return 'had no effect';
      } else {
        this.currentShip.phasersCharge = "charged!";
      }
    }
  }

}
