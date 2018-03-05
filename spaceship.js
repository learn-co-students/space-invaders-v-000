class Spaceship {
    constructor(name, crew, phasers, shields) { 
        this.name = name; 
        this.phasers = phasers; 
        this.shields = shields; 
        this.crew = crew; 
        this.cloaked = false; 
        this.warpDrive = "disengaged"; 
        this.docked = true; 
        this.phasersCharge = "uncharged";
    

    if(crew.length === 0) { 
        this.docked = true; 
    } else { 
        this.docked = false; 
    }
    this.notifyCrew();
}

    notifyCrew() { 
        this.crew.forEach(CrewMember => {
            CrewMember.currentShip = this; 
        })
    }
} 
