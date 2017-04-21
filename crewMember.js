class CrewMember{

	constructor(position){
		this.position = position;
		this.currentShip = 'Looking for a Rig';
	}

	engageWarpDrive(){
		if(!(this.currentShip instanceof Spaceship)){
			return 'had no effect';
		}

		if(this.position === 'Pilot'){
			this.currentShip.warpDrive = 'engaged!'
		} else {
			this.currentShip.warpDrive = 'disengaged'
		}
	}

	setsInvisibility(){
		if(!(this.currentShip instanceof Spaceship)){
			return 'had no effect';
		}

		if(this.position === 'Defender'){
			this.currentShip.cloaked = true
		} else {
			this.currentShip.cloaked = false
		}
	}

	chargePhasers(){
		if(!(this.currentShip instanceof Spaceship)){
			return 'had no effect';
		}

		if(this.position === 'Gunner'){
			this.currentShip.phasersCharge = 'charged!'
		} else {
			this.currentShip.phasersCharge = 'uncharged'
		}

	}
}
