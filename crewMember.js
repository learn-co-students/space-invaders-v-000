function CrewMember (position) {
  this.position = position;
  this.currentShip = 'Looking for a Rig';
}
CrewMember.prototype = {
  constructor: CrewMember,
  engageWarpDrive: function(){
    if (this.position === "Pilot" && this.currentShip !== 'Looking for a Rig') {
      this.currentShip.warpDrive = "engaged!";
    }else{
        return "had no effect";
    }
	},
	setsInvisibility: function(){
    if (this.position === "Defender" && this.currentShip !== 'Looking for a Rig') {
      this.currentShip.cloaked = true;
  	}else{
    	return "had no effect";
    }
	},
	chargePhasers: function(){
   if (this.position === "Gunner" && this.currentShip !== 'Looking for a Rig') {
      this.currentShip.phasersCharge = "charged!";
    }else{
      return "had no effect";
    }
  }
}
