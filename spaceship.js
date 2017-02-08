class Spaceship{
  constructor(name, crew, phasers,shields){
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged';
    this.cloaked = false;
  
  if (crew.length === 0 ){
    this.docked = true
  } else {
    this.docked = false 
  };

  this.crewShip();
  }

  crewShip(){
    this.crew.forEach(crewmate => {
      crewmate.currentShip = this;
    });
  }





}  // end spaceship

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
 
//   sayHello() {
//     console.log("Hello, my name is "+ this.name);
//   }
// }
