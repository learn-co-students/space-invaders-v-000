class Spaceship {
    constructor(name, crew, phasers, shields) {
        this.name = name;
        this.crew = crew;
        this.phasers = phasers;
        this.shields = shields;
        this.cloaked = false;
        this.warpDrive = 'disengaged';
        this.phasersCharge = 'uncharged';
        
        //If ship is manned undock
        if(this.crew.length === 0) {
            this.docked = true;
        } else {
            this.docked = false;
        }

        //Iterate through crew and set there currentShip
        this.crew.forEach(member => {
            member.currentShip = this;
        })
    }
}