class Spaceship {
    constructor(name, crew, phasers, shields) {
        this.name = name;
        this.phasers = phasers;
        this.shields = shields;
        this.cloaked = false;
        this.warpDrive = "disengaged";
        if(crew.length > 0) {
            this.docked = false;
            this.crew = crew;
            for(var index in crew) {
                crew[index].currentShip = this
            }
        } else {
            this.docked = true;
            this.crew = [];
        }
        this.phasersCharge = "uncharged";
    }
}
