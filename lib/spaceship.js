function Spaceship(name, crew, phasers, shields) {
	this.name = name;
	this.crew = crew;
	this.phasers = 5;
	this.shields = 4;
	this.cloaked = false;
	this.warpDrive = 'disengaged';
	if (crew.length > 0) {
		this.docked = false;
	} else {
		this.docked = true; 
	}
  this.phasersCharge = 'uncharged';

	//crew.forEach(function(member) {
	//	member.currentShip = this;
	//}
	for (var i = 0; i < crew.length; i++) {
		crew[i].currentShip = this; //oh so you can just give it the object not just the object name
	}
}

//Spaceship.prototype.dockedyes = function() {
	//debugger;
//	console.log("hello from the method");
//	console.log(this.crew);
//	if (this.crew.length > 0) {
//		return false;
//	} else {
//		return true;
//	}
//}

var tim = new CrewMember("pilot");
var ship1 = new Spaceship("pop", [], 5, 4);
var ship2 = new Spaceship("pop2", [tim], 5, 4);
