class Spaceship {
	constructor(name, crew, phasers, shields) {
		this.name = name
		this.crew = crew
		this.phasers = phasers
		this.shields = shields
		this.cloaked = false
		this.warpDrive = 'disengaged'
		this.phasersCharge = 'uncharged'
		if (crew.length < 1) {
			this.docked = true
		} else {
			this.docked = false
		}
		this.notifyCrew()
	}

	notifyCrew() {
		this.crew.forEach(crew => {
			crew.currentShip = this
		})
	}
}

// theCat = new Spaceship("The Cat", [], 9, 10);
// theCat.docked