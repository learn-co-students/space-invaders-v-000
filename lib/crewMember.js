function CrewMember(position, currentShip) {
    this.position = position;
    this.currentShip = currentShip || "Looking for a Rig";
}

CrewMember.prototype.engageWarpDrive = function() {
    if ( this.currentShip !== "Looking for a Rig" && this.position === "Pilot" ) {
        return this.currentShip.warpDrive = 'engaged!';
    } else {
        return "had no effect";
    }
}

CrewMember.prototype.setsInvisibility = function() {
    if ( this.currentShip !== "Looking for a Rig" && this.position === "Defender" ) {
        return this.currentShip.cloaked = true;
    } else {
        return "had no effect";
    }
}

CrewMember.prototype.chargePhasers = function() {
    if ( this.currentShip !== "Looking for a Rig" && this.position === "Gunner" ) {
        return this.currentShip.phasersCharge = "charged!";
    } else  {
        return "had no effect"; 
    } 
    
}