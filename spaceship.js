class Spaceship
{
  constructor(name,crew_arr,p,s)
  {
    this.name=name;
    this.phasers=p;
    this.shields=s;
    this.cloaked=false;
    this.warpDrive="disengaged";
    this.crew=crew_arr;
    if(crew_arr.length>0)
      this.docked=false;
    else
      this.docked=true;
    this.phasersCharge="uncharged";
    this.crew.forEach(crewMember => {
      crewMember.currentShip=this;
    })
  }
}
