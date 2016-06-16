function Spaceship (name, crew, phasers, shields, phasersCharge = 'uncharged', cloaked = false, warpDrive = 'disengaged'){
	this.name = name
	this.crew = crew	
	this.phasers = phasers
	this.shields = shields
	this.cloaked = cloaked
	this.warpDrive = warpDrive
	this.phasersCharge = phasersCharge

	if (crew.length == 0){
		this.docked = true
	} else{
		this.docked = false
	}


	for (i = 0; i < this.crew.length; i++){
		this.crew[i].currentShip = this
	}

}

