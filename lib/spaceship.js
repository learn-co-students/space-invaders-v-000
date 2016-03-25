'use strict';

function Spaceship(name, crew, phasers, shields, cloaked, warpDrive, docked, phasersCharge) {
	var ship = this
	if (crew.length > 0) {
		crew.forEach(function(crewMember) {
			crewMember.currentShip = ship;
		});
		this.docked = false;
	} else {
		this.docked = true;
	}
	this.crew = crew
	this.name = name
	this.phasers = phasers
	this.shields = shields
	if (cloaked === undefined) { this.cloaked = false }; 
	if (warpDrive === undefined) { this.warpDrive = 'disengaged' };
	if (phasersCharge === undefined) { this.phasersCharge = 'uncharged' };
	

}
