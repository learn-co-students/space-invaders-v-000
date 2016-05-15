function CrewMember(position) {
  this.position = position;
}

CrewMember.prototype.currentShip = "Looking for a Rig";

CrewMember.prototype.engageWarpDrive = function() {
  if (this.currentShip == "Looking for a Rig" ) {
    return 'had no effect';
  }  else if (this.position == "Pilot") {
    this.currentShip.warpDrive = "engaged!";
  }
}

CrewMember.prototype.setsInvisibility = function() {
  if (this.currentShip == "Looking for a Rig" ) {
    return 'had no effect';
  }  else if (this.position == "Defender") {
    this.currentShip.cloaked = true;
  }
}

CrewMember.prototype.chargePhasers = function() {
  if (this.currentShip == "Looking for a Rig" ) {
    return 'had no effect';
  }  else if (this.position == "Gunner") {
    this.currentShip.phasersCharge = 'charged!';
  }
}

function Spaceship(name, crews, phasers, shields) {
  this.name = name;
  this.crews = crews;
  this. phasers = phasers;
  this.shields = shields

  this.cloaked = false;
  this.warpDrive = 'disengaged';
  this.phasersCharge = 'uncharged';

  var currentShip = this
  if (crews.length ==0) {
    this.docked = true;
  } else {
    this.docked = false;
    crews.forEach(function(crew) {
      crew.currentShip = currentShip;
    });
  }
}
