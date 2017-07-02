class CrewMember{

  constructor(position){
    this.position=position
    this.currentShip = 'Looking for a Rig'
  }

  hasShip(){
    return this.currentShip != 'Looking for a Rig'
  }

  engageWarpDrive(){
    if(this.hasShip()&&this.position=='Pilot'){
      this.currentShip.warpDrive = 'engaged!';
    }else{
      return 'had no effect';
    }
  }

  setsInvisibility(){
    if(this.hasShip()&&this.position=='Defender'){
      this.currentShip.cloaked = true;
    }else{
      return 'had no effect';
    }
  }

  chargePhasers(){
    if(this.hasShip()&&this.position=='Gunner'){
      this.currentShip.phasersCharge = 'charged!';
    }else{
      return 'had no effect';
    }
  }

}
