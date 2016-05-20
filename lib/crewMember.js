
function CrewMember(position, currentShip = "Looking for a Rig"){
  this.position =  position;
  this.currentShip = currentShip;
};

// CrewMember.prototype.chargePhasers = function(){
//
//   if (this.currentShip != "Looking for a Rig") && this.position == "Gunner") {
//     this.currentShip.phasersCharge = "charged!"}
//   else {this.currentShip.phasersCharge = "had no effect"};
//
// };
CrewMember.prototype.chargePhasers = function() {
  if (this.currentShip != 'Looking for a Rig' && this.position == 'Gunner') {
    this.currentShip.phasersCharge = 'charged!';
  }
  else {
    return 'had no effect';
  }
};

CrewMember.prototype.engageWarpDrive = function() {
  if (this.currentShip != 'Looking for a Rig' && this.position == 'Pilot') {
    this.currentShip.warpDrive = 'engaged!';
  }
  else {
  return 'had no effect';
  }
};

CrewMember.prototype.setsInvisibility = function() {
  if (this.currentShip != 'Looking for a Rig' && this.position == 'Defender') {
    this.currentShip.cloaked = true;
  }
  else {
    return 'had no effect';
  }
};
