class Spaceship {
    constructor(name, crew, phasers, shields) {
        this.name = name;
        this.crew = crew
        this.phasers = phasers;
        this.shields = shields;
        this.cloaked = false;
        this.warpDrive = 'disengaged';
        this.phasersCharge = 'uncharged';
        if (crew.length !== 0) {
            crew.forEach(function(member) {
                member.currentShip = this;
            }, this);
            this.docked = false
        } else {
          this.docked = true
        }
    }

    shipCrew(crew) {
        if (this.crew.length !== 0) {
            this.crew.forEach(function(member) {
                member.currentShip = this;
            }, this);
        }
        return crew;
    }

}
