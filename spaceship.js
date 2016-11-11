class Spaceship {

	constructor(name, crewMembers, phasers, shields) {
		this.name = name;
		this.phasers = phasers;
		this.shields = shields;
		this.cloaked = false;
		this.warpDrive = "disengaged";
		this.phasersCharge = "uncharged";

		this.crewMembers = crewMembers;

		for (var i = 0; i < this.crewMembers.length; i++) {
			crewMembers[i].currentShip = this;
		}

		// this.crewMembers.forEach(function(crewMember) {
		// 	crewMember.currentShip = this;
		// });

		if (this.crewMembers.length === 0) {
			this.docked = true;
		} else {
			this.docked = false;
		}
	}



}