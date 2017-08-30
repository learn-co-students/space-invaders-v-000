class Spaceship {
      constructor(name,crew,phasers,shields){
       this.name = name;
       this.phasers = phasers;
       this.crew = crew;
       this.shields = shields;
       if (this.crew.length === 0){
       this.cloaked = false;
       this.warpDrive = 'disengaged'
       this.docked = true;
       this.phasersCharge = 'uncharged'
       }
       else {
        this.docked = false;
        this.crew = crew;
             for(var index in crew) {
                crew[index].currentShip = this
            }
       };
     }
}


    