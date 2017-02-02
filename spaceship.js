class CrewMember{
  constructor(position, currentShip){
    this.position = position;
    this.currentShip = currentShip;

    if (this.currentShip=== 'undefined'){
     var lonely = "Looking for a Rig"
    }
    return lonely
  };




  chagePhasers(){

  };

  engageWarpDrive(){

  };

  setsInvisibility(){

  };
}


class Spaceship{
  constructor(name, cloaked=[false], phasers, shields, warpDrive="disengaged"){
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = cloaked;
    this.warpDrive = warpDrive;
  };

  engageWarpDrive(){

  };




}