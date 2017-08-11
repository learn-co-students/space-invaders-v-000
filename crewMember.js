class Spaceship{
	constructor(name, crew, phasers, shields ){
		this.name = name
		this.phasers = phasers
		this.shields = shields
		this.cloaked = false
		this.warpDrive = 'disengaged'
		this.crew = crew.forEach((crew) => crew.currentShip = this)
		this.phasersCharge = 'uncharged'
		crew.length === 0? this.docked = true: this.docked = false

	}
}

class CrewMember{
	constructor(position, currentShip = 'Looking for a Rig'){
		this.position = position
		this.currentShip = currentShip
	}

	engageWarpDrive(){
		if (this.position === "Pilot"){
			return this.currentShip === 'Looking for a Rig'? 'had no effect' : this.currentShip.warpDrive = "engaged!"
			
		}
		else{
			return 'had no effect'
		}
	}
	setsInvisibility(){
		if (this.position === "Defender"){
			return this.currentShip === 'Looking for a Rig'? 'had no effect' : this.currentShip.cloaked = true		
		}
		else {
			return 'had no effect'
		}
	}
	chargePhasers(){
		if (this.position === "Gunner"){
			return this.currentShip === 'Looking for a Rig'? 'had no effect' : this.currentShip.phasersCharge = "charged!"
		}
		else{
			return 'had no effect'
		}
	}
}
