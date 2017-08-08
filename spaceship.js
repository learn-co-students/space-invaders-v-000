class Spaceship {
    constructor(name, crew, phasers, shields) {
        if (crew.length !== 0) {
            crew.forEach(function(member) {
                member.currentShip = this;
            }, this);
        }
        
        this.name = name;
        this.crew = crew
        this.docked = (crew.length === 0)
        this.phasers = phasers;
        this.shields = shields;
        this.cloaked = false;
        this.warpDrive = 'disengaged';
        this.phasersCharge = 'uncharged';
    }

    updateShipForCrew(crew) {
        if (this.crew.length !== 0) {
            this.crew.forEach(function(member) {
                member.currentShip = this;
            }, this);
        }
        return crew;
    }  
    
}