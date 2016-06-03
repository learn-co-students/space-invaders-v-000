function Spaceship (name, crew, phasers, shields){
	this.name = name;
	this.crew = crew;
	this.phasers = phasers; 
	this.shields = shields;
	this.cloaked = false;
	this.warpDrive = 'disengaged';
	this.docked = crew.length < 1;
	this.phasersCharge = 'uncharged';
	this.addCrew();
}

Spaceship.prototype.addCrew = function(){
	var ship = this;
	this.crew.forEach(function(member){
		member.currentShip = ship;
	});
}