class Spaceship {
    constructor(name, crew, phasers, shields) {
        this.name = name;
        this.crew = crew;
        this.phasers = phasers;
        this.shields = shields;
        this.cloaked = false;
        this.warpDrive = 'disengaged';
        if (crew.length == 0)
            this.docked = true;
        else
            this.docked = false;
        this.phasersCharge = "uncharged";
        //this.crew.forEach(this, function(member) {
        //    member.currentShip = this;
        //});
        for (let i = 0; i < crew.length; i++) {
            crew[i].currentShip = this;
        }
    }
}

class CrewMember {
    constructor(position) {
        this.position = position;
        this.currentShip = 'Looking for a Rig';
    }
    
    engageWarpDrive() {
        if (this.position == "Pilot" && this.currentShip != 'Looking for a Rig')
            this.currentShip.warpDrive = 'engaged!';
        else
            return 'had no effect';
    }
    
    setsInvisibility() {
        if (this.position == "Defender" && this.currentShip != 'Looking for a Rig')
            this.currentShip.cloaked = true;
        else
            return 'had no effect';
    }

    chargePhasers() {
        if (this.position == "Gunner" && this.currentShip != 'Looking for a Rig')
            this.currentShip.phasersCharge = 'charged!';
        else
            return 'had no effect';
    }

}