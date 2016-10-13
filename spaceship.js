class Spaceship
{
  constructor(name,CrewMember, phasers,shields)
  {
    this.name=name;
    this.cloaked =false;
    this.warpDrive="disengaged"
    this.docked =CrewMember.length>0?false:true;
    this.phasersCharge="uncharged";
    this.phasers=phasers;
    this.shields=shields;
    this.CrewMember=CrewMember;
    if(this.CrewMember.length>0)
    this.CrewMember.forEach(function(member) {
     member.currentShip= this;
   });


  chargePhasers()
  {
   if (this.CrewMember.length>0)
    this.phasersCharge="charged!";

  }

  engageWarpDrive()
  {
     if (this.CrewMember.length>0)
    this.warpDrive ="engaged!";
  }

  setsInvisibility()
  {
     if (this.CrewMember.length>0)
    this.cloaked=true;
  }
}

class CrewMember
{
  constructor(position)
  {
    this.position=position;
    this.currentShip= "Looking for a Rig";
  }

  engageWarpDrive()
  {
    return "had no effect";
  }

  setsInvisibility()
  {
    return "had no effect";
  }
  chargePhasers()
  {
      return "had no effect";
  }
}
