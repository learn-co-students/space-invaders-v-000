class Spaceship {
  constructor(name, crewMembers, phasers, shields, cloaked = false, warpDrive = 'disengaged', docked = false, phasersCharge = 'uncharged') {
    this.name = name;
    this.crewMembers = crewMembers;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = cloaked;
    this.warpDrive = warpDrive;
    this.docked = docked;
    this.phasersCharge = phasersCharge;

    if (crewMembers.length == 0) {
      this.docked = true;
    } 
    else {
      var ship = this
      this.crewMembers.forEach(function(crewMember) {
        crewMember.currentShip = ship;
      });
    }

  }

  chargePhasers() {
    this.phasersCharge = 'charged!';
  }
}

// solution on Learn

// unique properties and methods go inside the constructor
// class Spaceship {
//   constructor(name, crew, phasers, shields) {
//     this.name = name;
//     this.crew = crew;
//     this.phasers = phasers;
//     this.shields = shields;
//     this.cloaked = false;
//     this.warpDrive = 'disengaged';
//     if (crew.length === 0) {
//       this.docked = true;
//     }else{
//       this.docked = false;
//     }
//     this.phasersCharge = 'uncharged';
//     this.notifyCrew();
//   }

//   notifyCrew(){
//     // using an arrow function lexically
//     // binds `this` to the context of this
//     // instance of Spaceship, rather than
//     // the context of the callback
//     this.crew.forEach(crewMember => {
//       crewMember.currentShip = this;
//     });
//   }
// }