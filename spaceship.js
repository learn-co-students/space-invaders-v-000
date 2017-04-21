class Spaceship{

	constructor(name, crew, phasers, shields){
		this.name = name;
		this.crew = crew;
		this.phasers = phasers;
		this.shields = shields;
		this.cloaked = false;
		this.warpDrive = 'disengaged';
		this.docked = crew.length !== 0 ? false : true;
		this.phasersCharge = 'uncharged';
		this.notifyCrew();
	}

	notifyCrew(){
	    // using an arrow function lexically
	    // binds `this` to the context of this
	    // instance of Spaceship, rather than
	    // the context of the callback
	    this.crew.forEach(crewMember => {
	      crewMember.currentShip = this;
	    });
	}

		// for(let i = 0, l = crewMembers.length; i < l; i++){
		// 	this.crewMembers[i].currentShip = this;
		// }
	
}