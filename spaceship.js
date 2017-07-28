
class Spaceship {
	constructor(name, crewed, phasers, shields) {
		this.name = name;
		this.crewed = crewed;
		this.phasers = phasers;
		this.shields = shields;
		this.cloaked = false;
		this.warpDrive = 'disengaged';
		if (this.crewed.length > 0) {
			this.docked = false;
		} else {
			this.docked = true;
		}
		this.phasersCharge = 'uncharged';
		this.setShip();
	}

	setShip() {
		this.crewed.forEach(crewMember => {
			crewMember.currentShip = this;
		})
	}

}