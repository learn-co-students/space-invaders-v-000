class Spaceship {
  constructor(name,crew,phasers,shields){
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.crew = crew
    this.warpDrive = "disengaged"
    if (this.crew.length === 0){
      this.docked = true
    } else {
      this.docked = false
    }
    this.phasersCharge = "uncharged"
    this.notifyCrew()
  }

  notifyCrew(){
   this.crew.forEach(crewMember => {
     crewMember.currentShip = this;
   });
 }
}
