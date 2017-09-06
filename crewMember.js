class CrewMember {
	constructor (position) {
		this.position = position;
		this.currentShip = "Looking for a Rig";
	}

	chargePhasers () {
		if (this.position === "Gunner" && typeof this.currentShip === 'object' ) {
			this.currentShip.phasersCharge = "charged!";
		} else {
			return this.noEffect();
		}
	}

	engageWarpDrive () {
		if (this.position === "Pilot" && typeof this.currentShip === 'object' ) {
			this.currentShip.warpDrive = "engaged!";
		} else {
			return this.noEffect();
		}
	}

	setsInvisibility () {
		if (this.position === "Defender" && typeof this.currentShip === 'object' ) {
			this.currentShip.cloaked = true;
		} else {
			return this.noEffect();
		}
	}

	noEffect () {
		return "had no effect"
	}
}
