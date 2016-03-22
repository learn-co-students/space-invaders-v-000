function Spaceship(name, crew, phasers, shields){
  this.name=name;
  this.crew=crew;
  this.phasers=phasers;
  this.shields=shields;
  this.cloaked=false;
  this.warpDrive='disengaged';
  this.phasersCharge='uncharged';
  this.docked=(this.crew.length > 0) ? false : true;
  var thisShip = this;
  this.crew.forEach(function (member){
    member.currentShip=thisShip;
  });
}





