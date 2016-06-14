function CrewMember(position, ship) {
	this.position = position;
	if (typeof ship == 'undefined') {
		this.currentShip = "Looking for a Rig";
	} else {
		this.currentShip = ship;
	}
	//if (typeof this.currentShip == 'undefined') {
		
	
}

CrewMember.prototype.engageWarpDrive = function() {
	if (this.currentShip == "Looking for a Rig") {
		return "had no effect";
	}	else {
		if (this.position == 'Pilot') { this.currentShip.warpDrive = 'engaged!'; }
	}
}

CrewMember.prototype.setsInvisibility = function() {
	if (this.currentShip == "Looking for a Rig") {
		return "had no effect";
	} else {
		if (this.position == 'Defender') {this.currentShip.cloaked = true;}
	}
}

CrewMember.prototype.chargePhasers = function() {
	if (this.currentShip == "Looking for a Rig") {
		return "had no effect";
	} else {
		if (this.position == 'Gunner') {this.currentShip.phasersCharge = "charged!";}
	}
}

var tim = new CrewMember("pilot");
