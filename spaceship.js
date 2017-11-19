class CrewMember {
  constructor(position, currentShip) {
    this.position = position;
    if (!currentShip) {
      this.currentShip = "Looking for a Rig"
    } else {
      this.currentShip = currentShip.name;
    }
  }
  engageWarpDrive() {
    if (this.currentShip.name && this.position === "Pilot") {
      this.currentShip.warpDrive = "engaged!";
    } else {
    return "had no effect";
    }
  }

  setsInvisibility() {
    if (this.currentShip.name && this.position === "Defender") {
      this.currentShip.cloaked = true;
    } else {
      return "had no effect";
    }
  }

  chargePhasers() {
    if (!this.currentShip.name || this.position !== "Gunner") {
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
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";
    if (crew.length === 0) {
      this.docked = true;
    } else {
      this.docked = false;
      for (let i = 0, l = this.crew.length; i < l; i++) {
        this.crew[i].currentShip = this
      }
    }
  }
  warpDrive() {
    return "disengaged";
  }

}
