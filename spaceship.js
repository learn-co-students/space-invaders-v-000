class Spaceship{

	constructor(name, crewMembers, phasers, shields){
		this.name = name;
		this.crewMembers = crewMembers;
		this.phasers = phasers;
		this.shields = shields;
		this.cloaked = false;
		this.warpDrive = 'disengaged';
		this.docked = crewMembers.length !== 0 ? false : true;
		this.phasersCharge = 'uncharged';

		for(let i = 0, l = crewMembers.length; i < l; i++){
			this.crewMembers[i].currentShip = this;
		}
	}
}