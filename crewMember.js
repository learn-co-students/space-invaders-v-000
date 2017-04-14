class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentShip = "Looking for a Rig";
  };

  ship(ship) {
    this.currentShip = ship;
  };

  engageWarpDrive() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    } else if (this.position === "Pilot") {
      console.log(this)
      this.currentShip.engageWarpDrive();
    }
  };

  setsInvisibility() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    } else if (this.position === "Defender") {
      this.currentShip.setsInvisibility();
    }
  };

  chargePhasers() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect";
    } else if (this.position === "Gunner") {
      this.currentShip.chargePhasers();
    }
  };
}
