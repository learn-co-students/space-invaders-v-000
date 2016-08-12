class CrewMember{
	constructor(position){
		this.position = position;
		this.currentShip = "Looking for a Rig";
	}

	engageWarpDrive(){
		if(this.currentShip=="Looking for a Rig"){
			return "had no effect";
		} else if (this.position=="Pilot") {
			this.currentShip.warpDrive = "engaged!";
		}
	}

	setsInvisibility(){
		if(this.currentShip=="Looking for a Rig"){
			return "had no effect";
		} else if (this.position=="Defender") {
			this.currentShip.cloaked = true;
		}
	}

	chargePhasers(){
		if(this.currentShip=="Looking for a Rig"){
			return "had no effect";
		} else if (this.position=="Gunner") {
			this.currentShip.phasersCharge = "charged!";
		}
	}
}

class Spaceship{

	constructor(name, crew, phasers, shields){
		this.crew = crew;
		this.name = name;
		for(var i=0; i<crew.length; i++){
			crew[i].currentShip = this;
		}
		this.phasers = phasers;
		this.shields = shields;
		this.cloaked = false;
		this.warpDrive = "disengaged";
		if(this.crew.length==0){
			this.docked = true;
		} else {
			this.docked = false;
		}
		this.phasersCharge = "uncharged";

	}



}