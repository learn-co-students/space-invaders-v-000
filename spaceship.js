class Spaceship {
    constructor(name,crew,phasers,shields) {
        this.name = name;
        this.crew = crew;
        this.phasers = phasers;
        this.phasersCharge = 'uncharged'
        this.shields = shields;
        this.cloaked = false;
        this.warpDrive = "disengaged";
        if (this.crew.length === 0){
            this.docked = true;
            
        } else {
            this.setCrew();
            this.docked = false;
        }

    }
    setCrew() {
        let ship = this;
        this.crew.forEach((crewMember) => {
            crewMember.setCurrentShip(ship);
        })
        this.docked = false;
    }

}
