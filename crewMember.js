function CrewMember (position) {
  this.position = position;
  this.currentShip = "Looking for a Rig";


  this.engageWarpDrive = function(){
    if (this.currentShip == "Looking for a Rig")
      return "had no effect";
    else if (position == 'Pilot')
        this.currentShip.warpDrive = "engaged!"
    else
        this.currentShip.warpDrive = "disengaged";

    }

  this.chargePhasers = function(){
    if (this.currentShip == "Looking for a Rig")
      return "had no effect";
    else if (position == 'Gunner')
        this.currentShip.phasersCharge = "charged!";
    else
        this.currentShip.phasersCharge = "uncharged";

    }

  this.setsInvisibility = function(){
    if (this.currentShip == "Looking for a Rig")
      return "had no effect";
    else if (position == 'Defender')
        this.currentShip.cloaked = true;
    else
        this.currentShip.cloaked =  false;

    }

}
