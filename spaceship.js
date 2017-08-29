class Spaceship {
    constructor(name, crew, phasers, shields, cloaked = false, warpDrive = 'disengaged', phasersCharge = 'uncharged') {
        this.name = name;
        this.crew = crew;
        this.phasers = phasers;
        this.shields = shields;
        this.cloaked = cloaked;
        this.warpDrive = warpDrive;
        if (crew.length === 0) {
            this.docked = true;
        } else {
            this.docked = false;
        }
        this.phasersCharge = phasersCharge;
        this.notifyCrew();
    }

    notifyCrew() {
        this.crew.forEach(member => {
            member.currentShip = this;
        })
    }
}
