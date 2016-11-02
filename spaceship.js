function Spaceship (name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";
    this.docked = this.crew.length < 1 ? true : false;
    this.addCrewMembers();
  }

  Spaceship.prototype.addCrewMembers = function () {
    var ship = this;
    this.crew.forEach(function(member){
      member.currentShip = ship;
  });
  };