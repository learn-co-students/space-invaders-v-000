// function President(name, politicalParty, yearsInOffice, homeState) {
//   this.name = name;
//   this.politicalParty = politicalParty;
//   this.yearsInOffice = yearsInOffice;
//   this.homeState = homeState;
// }
//
// President.prototype.veto = function(){
//   return "NO!";
// }
//
// var georgeWashington = new President("George Washington", "Democrat", "?-?", "Delware");

function CrewMember(role) {
  this.position = role;
  this.currentShip = "Looking for a Rig";
}

function Spaceship(name, crew, phasers, shields) {

  this.name = name;
  this.phasers = phasers;
  this.shields = shields;
  for (var member in crew) {
    crew[member].currentShip = this;
  }
  this.crew = crew;
  this.cloaked = false;
  this.warpDrive = "disengaged";
  this.phasersCharge = "uncharged";
  if (this.crew.length > 0) {
    // Ship is docked without a crew
    this.docked = false;
  } else {
    // Ship is undocked with a crew
    this.docked = true;
  }
}
// 
// Spaceship.prototype.docked = function() {
//   if (this.crew.length > 0) {
//     // Ship is docked without a crew
//     return false;
//   } else {
//     // Ship is undocked with a crew
//     return true;
//   }
// }

CrewMember.prototype.chargePhasers = function(){
  if (this.position === "Gunner"  && this.currentShip !== "Looking for a Rig") {
    this.currentShip.phasersCharge = "charged!";
    console.log("Charged up!");
  } else {
    return "had no effect";
  }
}

CrewMember.prototype.engageWarpDrive = function(){
  if (this.position === "Pilot" && this.currentShip !== "Looking for a Rig") {
    this.currentShip.warpDrive = "engaged!"
  } else {
    return "had no effect";
  }
}

CrewMember.prototype.setsInvisibility = function(){
  if (this.position === "Defender"  && this.currentShip !== "Looking for a Rig") {
    this.currentShip.cloaked = true;
  } else {
    return "had no effect";
  }
}
