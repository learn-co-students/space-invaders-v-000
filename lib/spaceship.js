'use strict';

function Spaceship(name, crew, phasers, shields, cloaked = false, warpDrive = 'disengaged', docked = true, phasersCharge = 'uncharged') {
	var ship = this
	if (crew.length > 0) {
		crew.forEach(function(crewMember) {
			crewMember.currentShip = ship;
		});
		docked = false;
	}
	this.crew = crew
	this.name = name
	this.phasers = phasers
	this.shields = shields
	this.cloaked = cloaked
	this.warpDrive = warpDrive
	this.docked = docked
	this.phasersCharge = phasersCharge


}
