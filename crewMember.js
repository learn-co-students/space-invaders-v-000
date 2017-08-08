class CrewMember {
    constructor(position, currentShip = "Looking for a Rig") {
        this.position = position;
        this.currentShip = currentShip
    }

    engageWarpDrive(params) {
        if (this.position === "Pilot" && this.currentShip instanceof Object) {
            this.currentShip.warpDrive = "engaged!"
        } else {
            return "had no effect";            
        }
    }

    setsInvisibility() {
        if (this.position === "Defender" && this.currentShip instanceof Object) {
            this.currentShip.cloaked = true;
        } else {        
            return "had no effect";
        }
    }

    chargePhasers() {
        if (this.position === 'Gunner' && this.currentShip instanceof Object) {
            this.currentShip.phasersCharge = 'charged!';
        } else {
            return "had no effect";  
        }
    }


}