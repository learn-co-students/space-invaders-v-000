class CrewMember {
	
	constructor(pos, currentShip = "Looking for a rig") {
	 this.position    = pos;	
	 this.currentShip = currentShip;
	}

	chargePhasers() {
	 return (this.currentShip instanceof Spaceship && this.position == "Gunner" ? this.currentShip.phasersCharge = "charged!" : "had no effect");
	}

	engageWarpDrive() {
	 return (this.currentShip instanceof Spaceship && this.position == "Pilot" ? this.currentShip.warpDrive = "engaged!" : "had no effect");
	}

	setsInvisibility() {
	 return (this.currentShip instanceof Spaceship && this.position == "Defender" ? this.currentShip.cloaked = true : "had no effect");
	}

}
