class CrewMember {
  constructor(position) {
    this.position = position;
    if (this.currentShip === undefined) {
    	this.currentShip = "Looking for a Rig";
    }
  }
  engageWarpDrive() {
    	if (this.currentShip === "Looking for a Rig") {
    		return 'had no effect';
    	} else if (this.position === "Pilot") {
    		this.currentShip.warpDrive = 'engaged!';
    	}
    }
    setsInvisibility() {
    	if (this.currentShip === "Looking for a Rig") {
    		return 'had no effect';
    	} else if (this.position === "Defender") {
    		this.currentShip.cloaked = true;
    	}
    }

    chargePhasers() {
      if (this.currentShip === "Looking for a Rig") {
    		return 'had no effect';
    	} else if (this.position === "Gunner") {
    		this.currentShip.phasersCharge = 'charged!';
    	}
    }
}

class Spaceship {
  constructor(name, crews, phasers, shields) {
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged';
    if (crews.length === 0) {
      this.docked = true;
    } else {
      this.docked = false;
    }
    for(var i = 0, len = crews.length; i < len; i ++) {
     crews[i]['currentShip'] = this;
  	}
  }
}
