class Spaceship {
  constructor(name, crewMembers, phasers="uncharged", shields, cloaked=false, warpDrive="disengaged", phasersCharge="uncharged") {
    this.name = name;
    this.crewMembers = crewMembers;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = cloaked;
    this.warpDrive = warpDrive;
    this.docked = true;
    if (crewMembers.length !== 0) {
      this.docked = false;
      for (var i = 0; i < crewMembers.length; i++) {
        crewMembers[i].currentShip = this;
      }
    }
    this.phasersCharge = phasersCharge;
  }
}

class CrewMember {
  constructor(position, currentShip='Looking for a Rig') {
    this.position = position;
    this.currentShip = currentShip;
  }

  chargePhasers() {
    if (this.position != "Gunner") {
      return "had no effect";
    } else if (this.currentShip == 'Looking for a Rig') {
      return "had no effect";
    }  else {
      this.currentShip.phasersCharge = "charged!";
    }
  }

  engageWarpDrive() {
    if (this.position != "Pilot") {
      return "had no effect";
    } else if (this.currentShip == 'Looking for a Rig') {
      return "had no effect";
    } else {
      this.currentShip.warpDrive = "engaged!";
    }
  }

  setsInvisibility() {
    if (this.position != "Defender") {
      return "had no effect";
    } else if (this.currentShip == 'Looking for a Rig') {
      return "had no effect";
    } else {
      this.currentShip.cloaked = true;
    }
  }

}
