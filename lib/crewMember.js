'use strict';

function CrewMember(position, currentShip = "Looking for a Rig") {
	this.position = position
	this.currentShip = currentShip
}

CrewMember.prototype.engageWarpDrive = function() { 
	if (typeof(this.currentShip) === "object" && this.position === "Pilot") {
		this.currentShip.warpDrive = "engaged!"
	} else {
		return "had no effect"
	}
}

CrewMember.prototype.setsInvisibility = function() { 
	if (typeof(this.currentShip) === "object" && this.position === "Defender") {
		this.currentShip.cloaked = true
	} else {
		return "had no effect"
	}
}

CrewMember.prototype.chargePhasers = function() { 
	if (this.currentShip !== "Looking for a Rig" && this.position === "Gunner") {
		this.currentShip.phasersCharge = "charged!"
	} else {
		return "had no effect"
	}
}



