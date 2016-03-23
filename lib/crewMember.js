//crewMember.js 
'use strict';

function CrewMember(position, currentShip){
  this.currentShip = currentShip || "Looking for a Rig";
  this.position = position;
  this.engageWarpDrive = function(){
    if(this.position == "Pilot" && this.currentShip != "Looking for a Rig"){
      this.currentShip.warpDrive = "engaged!";
    } else {
      return "had no effect";
    }
  }
  this.setsInvisibility = function(){
    if (this.position == "Defender" && this.currentShip != "Looking for a Rig"){
      this.currentShip.cloaked = true;
    } else {
      return "had no effect";
    }
  }
  this.chargePhasers = function(){
    if(this.position == "Gunner" && this.currentShip != "Looking for a Rig"){
      this.currentShip.phasersCharge = "charged!";
    } else {
      return "had no effect";
    }
  }

}
