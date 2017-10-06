/* 
1. Create two ES6 JS classes, Spaceship and CrewMember. 
2.A space ship will be inactive if it is created without a crew. 
3. To have these two object types be aware of one another we need to have the ship become aware of its crew members when it's created.
4. This will also require you to make sure a crew member becomes aware of their ship when they are added to it.
*/

class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    if (crew.length === 0) {
      this.docked = true;
    }else{
      this.docked = false;
    }
    this.phasersCharge = 'uncharged';
    this.notifyCrew();
  }
  
   notifyCrew(){
      this.crew.forEach(crewMember => {
      crewMember.currentShip = this;
    });
  }
}
