class Spaceship {
    constructor(name, crew, phasers, shields) {
        this.name = name;
        this.phasers = phasers;
        this.shields = shields;
        this.cloaked = false;
        this.phasersCharge = "uncharged";
        this.warpDrive = "disengaged";
        this.crew = crew;
        this.docked = this.crew.length > 0 ? false : true;
        this.assignShipToCrew();
    }

    assignShipToCrew() {
        this.crew.forEach(crewMember => {
            crewMember.currentShip = this;
        });
    }
}

class CrewMember {
    constructor(position) {
        this.position = position;
        this.currentShip = "Looking for a Rig";
    }

    engageWarpDrive() {
        if (typeof this.currentShip === 'object' && this.position === "Pilot") {
            this.currentShip.warpDrive = "engaged!";
        } else {
            return "had no effect";
        }
    }

    setsInvisibility() {
        if (typeof this.currentShip === 'object' && this.position === "Defender") {
            this.currentShip.cloaked = true;
        } else {
            return "had no effect";
        }
    }

    chargePhasers() {
        if (typeof this.currentShip === 'object' && this.position === "Gunner") {
            this.currentShip.phasersCharge = "charged!";
        } else {
            return "had no effect";
        }
    }
}