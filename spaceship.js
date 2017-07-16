


class Spaceship {
	constructor(name, crew, phasers, shields) {
		this.name = name; 
		this.phasers = phasers; 
		this.crew = crew; 
		this.shields = shields; 	
		this.cloaked = false; 
		this.warpDrive = "disengaged"; 
		this.phasersCharge = "uncharged"; 
		if (crew.length === 0) {
			this.docked = true; 
		} else {
			this.docked  = false; 
		}
		this.crewShips(); 

	}

	crewShips() {
		var crewName = this; 
		this.crew.forEach(function(crewMember) {
			crewMember.currentShip = crewName; 
		})	; 
	
	}
	


	


}
