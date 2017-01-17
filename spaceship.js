class Spaceship {
	constructor(name, crew, phasers, shields) {
		this.name = name;
		this.crew = crew;
		this.phasers = phasers;
		this.shields = shields;
		this.cloaked = false; //default
		this.warpDrive = "disengaged"; //default
		this.phasersCharge = "uncharged"; //default

	    if (crew.length === 0) {
	      this.docked = true; //default
	    } else {
	      this.docked = false;
	    };
	    this.setSpaceship(); //will run on instantiation		
	};

	setSpaceship() {
		debugger;
		this.crew.forEach(crewMember => {
			crewMember.currentShip = this;
		});
	};
}