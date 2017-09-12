class Spaceship{
    constructor(name, crew, phasers, shields){
       this.name = name;
       this.crew = crew;

       this.phasers = phasers;
       this.shields = shields;
       this.cloaked = false;
       this.warpDrive = "disengaged";
       this.phasersCharge = "uncharged";
       this.docked = (crew.length >1)? false : true;

       this.notifyCrew();
    }
    
    notifyCrew(){
        this.crew.forEach(crewMember =>{
            crewMember.currentShip = this;
        });
    }
}