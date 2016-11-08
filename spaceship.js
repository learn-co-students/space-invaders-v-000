class CrewMember{
	constructor(position){
		this.position = position;
		this.currentShip = "Looking for a Rig";
	}
	engageWarpDrive(){
		if (this.currentShip != "Looking for a Rig" && this.position === "Pilot"){
			this.currentShip.warpDrive = "engaged!"
		}else{
			return "had no effect";
		}
		
	}

	setsInvisibility(){
		if (this.currentShip != "Looking for a Rig" && this.position === "Defender"){
		this.currentShip.cloaked = true;
		}else{
			return "had no effect"
		}
	}

	chargePhasers(){
		if (this.currentShip != "Looking for a Rig" && this.position === "Gunner"){
		this.currentShip.phasersCharge = "charged!"
		}else{
			return "had no effect"
		}
	}

}

class Spaceship{
	constructor(name, crew, phasers, shields){
		this.name = name;
		this.crew = crew;
		var ship = this;
		this.crew.forEach(function(crewMember){
			crewMember.currentShip = ship;
		})

		this.phasers = phasers;
		this.shields = shields;
		this.cloaked = false;
		this.warpDrive = 'disengaged';
		this.phasersCharge = "uncharged";
		if (this.crew.length > 0){
			this.docked = false;
		}else{
			this.docked = true;
		}
	}
}