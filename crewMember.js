class CrewMember {
	constructor(position) {
		this.position = position;
		this.currentShip = "Looking for a Rig";
		if (this.currentShip === "Looking for a Rig"){
			this.onAShip = false;
		} else {
			this.onAShip = true;
		}
	}

	setsInvisibility() {
		if (this.position === 'Defender' && this.onAShip) {
			this.currentShip.cloaked = true;
		} else {
			return 'had no effect';
		}
	}

	chargePhasers() {
		if (this.position === 'Gunner' && this.onAShip) {
			this.currentShip.phasersCharge = 'charged!'
		} else {
			return 'had no effect';
		}
	}

	engageWarpDrive() {
		if (this.position === 'Pilot' && this.onAShip) {
			this.currentShip.warpDrive = "engaged!"
		} else {
			return 'had no effect';
		}
	}

}